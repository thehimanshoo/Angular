import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {IEmployee} from '../models/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  // get All Employees
  public getAllEmployees():Observable<IEmployee[]>{
    let dataURL:string = 'https://gist.githubusercontent.com/thenaveensaggam/acaf5377783131ae4705ba15964ad146/raw/9fd1acf3a437781da5440e14619f3df18a8952af/employees-02102020.json';
    return this.httpClient.get<IEmployee[]>(dataURL).pipe(
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
