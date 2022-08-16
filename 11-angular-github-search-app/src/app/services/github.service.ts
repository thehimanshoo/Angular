import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {CLIENT_ID, CLIENT_SECRET} from '../credentials/githubCredentials';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {IProfile} from '../models/IProfile';
import {IRepository} from '../models/IRepository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private httpClient:HttpClient) { }

  // search Profile
  public searchProfile(githubUser):Observable<IProfile>{
    let dataURL:string = `https://api.github.com/users/${githubUser}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient.get<IProfile>(dataURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // search repos
  public searchRepos(githubUser):Observable<IRepository[]>{
    let dataURL:string = `https://api.github.com/users/${githubUser}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient.get<IRepository[]>(dataURL).pipe(
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
