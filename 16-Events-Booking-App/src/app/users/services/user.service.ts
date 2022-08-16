import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {IUser} from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  // register
  public register(user:IUser):Observable<{result : string , user : IUser}>{
    let dataURL:string = `http://127.0.0.1:5000/users/register`;
    return this.httpClient.post<{result : string , user : IUser}>(dataURL,user).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // login
  public login(user:IUser):Observable<{result : string , token : string , user : IUser}>{
    let dataURL:string = `http://127.0.0.1:5000/users/login`;
    return this.httpClient.post<{result : string , token : string, user : IUser}>(dataURL,user).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // get Token
  public getToken():string{
    return localStorage.getItem('token');
  }

  // is LoggedIn
  public isLoggedIn():boolean{
    let token = localStorage.getItem('token');
    return !!token;
  }

  // logOut
  public logOut(){
    localStorage.removeItem('token');
  }

  // is AdminUser
  public isAdminUser(){
    let user = JSON.parse(localStorage.getItem('user'));
    if(user){
      return user.isAdmin;
    }
    else{
      return false;
    }
  }

  // getUserData
  public getUserData(){
    return JSON.parse(localStorage.getItem('user'));
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
