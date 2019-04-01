import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UrlService } from '../url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  constructor(
    private url: UrlService,
    private http: HttpClient,
  ) { }
  login(email, password): Observable<any> {
    return this.http.post<any>(this.url.build('/users/login'), { email, password }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response'
    }).pipe(
      tap(res => {
        if (res.status === 200) {
          localStorage.setItem('token', res.headers.get('x-auth'))
          this.isLoggedIn = true
        }
      })
    )
  }

  // logout() {
  //   localStorage.removeItem('token');
  //   this.isLoggedIn = false;
  //   return this.http.delete(this.url.build('/users/token'), {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'x-auth': localStorage.getItem('token')
  //     })
  //   }).pipe(
  //     tap(()=>{
  //       console.log('yolo')
  //       localStorage.removeItem('token');
  //       this.isLoggedIn = false;
  //     }
  //     )
  //   )
  //  }

  logout(): Observable<any>{
    //delete token inside local storage
    return this.http.delete(this.url.build('/users/token'), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-auth': localStorage.getItem('token')
      })
    }).pipe(
      tap(()=>{
        localStorage.removeItem('token');
        this.isLoggedIn = false;
      })
    )
  }
}
