import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Properties } from '../app/Properties';
import { AuthService } from '../app/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getJaja(): Observable<[Properties]> {
    return this.http.get<[Properties]>(`${this.apiUrl}/prepelicja_jaja`);
  }

  getUkiseljena_prepelicja_jaja(): Observable<[Properties]> {
    return this.http.get<[Properties]>(
      `${this.apiUrl}/Ukiseljena_prepelicja_jaja`
    );
  }

  getRezanci(): Observable<[Properties]> {
    return this.http.get<[Properties]>(`${this.apiUrl}/rezanci`);
  }

  addJaja(newJaja: Properties): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    //console.log('newJAJA', newJaja);
    const body = JSON.stringify(newJaja);
    //console.log('body', body);
    return this.http.post(
      `${this.apiUrl}/kosarica/${this.authService.userEmail()}`,
      body,
      {
        headers: headers,
      }
    );
  }

  addUkisJaja(newJaja: Properties): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    //console.log('newJAJA', newJaja);
    const body = JSON.stringify(newJaja);
    //console.log('body', body);
    return this.http.post(
      `${this.apiUrl}/kosarica/${this.authService.userEmail()}`,
      body,
      {
        headers: headers,
      }
    );
  }

  addRezanci(newJaja: Properties): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    //console.log('newJAJA', newJaja);
    const body = JSON.stringify(newJaja);
    //console.log('body', body);
    return this.http.post(
      `${this.apiUrl}/kosarica/${this.authService.userEmail()}`,
      body,
      {
        headers: headers,
      }
    );
  }

  getKosarica(): Observable<[Properties]> {
    return this.http
      .get<[Properties]>(
        `${this.apiUrl}/kosarica/${this.authService.userEmail()}`
      )
      .pipe();
  }

  getKosaricaProizvod(): Observable<[Properties]> {
    return this.http
      .get<[Properties]>(
        `${this.apiUrl}/kosarica/proizvod/${this.authService.userEmail()}`
      )
      .pipe();
  }

  deleteKosarica(id: any): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/kosarica/${id}`).pipe();
  }
}
