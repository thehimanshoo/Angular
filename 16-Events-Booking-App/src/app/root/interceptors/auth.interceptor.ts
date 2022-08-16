import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserService} from '../../users/services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService:UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let tokenizedRequest = request.clone({
      setHeaders : {
        'Authorization' : `Bearer ${this.userService.getToken()}`
      }
    });

    return next.handle(tokenizedRequest);
  }
}
