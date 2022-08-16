import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {IContact} from '../models/IContact';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient:HttpClient) { }

  //get All Contacts
  public getAllContacts():Observable<IContact[]>{
    let dataURL:string = `https://gist.githubusercontent.com/thenaveensaggam/c367a0ea4259218222f959895636a6f1/raw/cc145cf94af9b313ff8cc7fdeb6e5decdce149f0/employees-30092020.json`;
    return this.httpClient.get<IContact[]>(dataURL).pipe(
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
