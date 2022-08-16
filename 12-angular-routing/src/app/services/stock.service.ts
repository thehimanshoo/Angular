import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {IEmployee} from '../models/IEmployee';
import {catchError, retry} from 'rxjs/operators';
import {IStock} from '../models/IStock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient:HttpClient) { }

  // get All Stocks
  public getAllStocks():Observable<IStock[]>{
    let dataURL:string = 'https://gist.githubusercontent.com/thenaveensaggam/fe27cc8507cf3035bc4806a608cd70f4/raw/ef6d912e7da96cdcc09a918d6b42aba1219dfdfe/stocks-02102020.json';
    return this.httpClient.get<IStock[]>(dataURL).pipe(
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
