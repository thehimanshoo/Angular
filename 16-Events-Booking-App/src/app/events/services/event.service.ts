import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {IEvent} from '../models/IEvent';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient:HttpClient) { }

  // free Events
  public getFreeEvents():Observable<IEvent[]>{
    let dataURL:string = `http://127.0.0.1:5000/events/free`;
    return this.httpClient.get<IEvent[]>(dataURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // pro Events
  public getProEvents():Observable<IEvent[]>{
    let dataURL:string = `http://127.0.0.1:5000/events/pro`;
    return this.httpClient.get<IEvent[]>(dataURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // upload Event
  public uploadEvent(event:IEvent):Observable<{result : string , event : IEvent}>{
    let dataURL:string = `http://127.0.0.1:5000/events/upload`;
    return this.httpClient.post<{result : string , event : IEvent}>(dataURL, event).pipe(
      retry(1),
      catchError(this.handleError)
    );
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
