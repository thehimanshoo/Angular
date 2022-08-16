import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IUser} from '../models/IUser';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  //enroll
  public enroll(user:IUser):Observable<{msg : string}>{
    let dataURL = `http://127.0.0.1:5000/user/enroll`;
    return this.httpClient.post<{msg : string}>(dataURL, user).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // register
  public register(user:IUser):Observable<{msg : string}>{
    let dataURL = `http://127.0.0.1:5000/user/register`;
    return this.httpClient.post<{msg : string}>(dataURL, user).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  public handleError(error:HttpErrorResponse){
    let errorMessage:string = '';
    if(error.error instanceof ErrorEvent){
      // client Error
      errorMessage = `Error : ${error.error.message}`
    }
    else{
      // server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
