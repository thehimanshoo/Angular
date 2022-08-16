import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IEmployee} from '../models/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  public fetchAllEmployees():Observable<IEmployee[]>{
    let dataURL:string = `https://gist.githubusercontent.com/thenaveensaggam/c367a0ea4259218222f959895636a6f1/raw/cc145cf94af9b313ff8cc7fdeb6e5decdce149f0/employees-30092020.json`;
    return this.httpClient.get<IEmployee[]>(dataURL).pipe(
      retry(1)
    );
  }
}
