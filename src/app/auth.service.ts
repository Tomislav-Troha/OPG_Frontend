import { Injectable } from '@angular/core';
import { Register } from '../app/Properties';
import { Prijava } from '../app/Properties';
import { map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  register(register: Register) {
    const headers = { 'content-type': 'application/json' };
    //console.log('reg', register);
    const body = JSON.stringify(register);
    // console.log('body', body);
    return this.http
      .post(`${this.apiUrl}/users`, body, {
        headers: headers,
      })
      .pipe(
        map((data) => {
          console.log('is this token', data);
          localStorage.setItem('user', JSON.stringify(body));
        })
      );
  }

  prijava(login: Prijava) {
    const headers = { 'content-type': 'application/json' };
    //console.log('reg', reg);
    const body = JSON.stringify(login);
    //console.log('body', body);
    return this.http
      .post(`${this.apiUrl}/auth`, body, {
        headers: headers,
      })
      .pipe(
        map((data) => {
          console.log('is this token', data);
          localStorage.setItem('user', JSON.stringify(data));
        })
      );
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/prijava_registracija']);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  getToken() {
    let user = this.getUser();
    //console.log('TOKENCINA', user);
    if (user && user.token) {
      return user.token;
    } else {
      return false;
    }
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return token;
  }
}
