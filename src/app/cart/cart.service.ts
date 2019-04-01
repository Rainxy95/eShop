import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../url.service';
import { AuthService } from '../auth/auth.service';
import { tap } from '../../../node_modules/rxjs/operators';
const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  }),
  withCredentials: true
};
const genHttpOptions = {
  'cart':()=>httpOptions,
  'usercart':()=>{
    return {
      headers : new HttpHeaders({
        'Content-Type':'application/json',
        'x-auth':localStorage.getItem('token')
      }),
      withCredentials:true
    } 
  }
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalCount:number = 0;
  cart:string;
  constructor(
    private http: HttpClient,
    private url: UrlService,
    private auth: AuthService
  ) { }

  setCart(auth:boolean){
    if(auth){
      this.cart = 'usercart'
    }
    this.cart = 'cart'
  }
  getCheckout():Observable<any>{
    return this.http.get<any>(this.url.build('/checkout'))
  }
  
  addCart(cart):Observable<any>{
    this.setCart(this.auth.isLoggedIn);
    return this.http.post<any>(this.url.build(`/${this.cart}`),cart,genHttpOptions[this.cart]())
      .pipe(
        tap(cart=>{
          this.totalCount = cart.totalCount;
          console.log(cart)
        })
      )
  }

  getCart():Observable<any>{
    return this.http.get<any>(this.url.build(`/${this.cart}`)).pipe(
      tap(cart=>{
        this.totalCount = cart.totalCount
      })
    )
  }
}
