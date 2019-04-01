import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  apiUrl=`http://localhost:3000`;
  api_key=`d8H44HgoRItwE6TdVCJoMWkL`
  constructor() { }
  build(path,param?){
    let paramString = "?" + (param? Object.keys(param).map(k=>`${k}=${param[k]}`):[]).join("&")
    return `${this.apiUrl}${path}${paramString}&api_key=${this.api_key}`
  }
}
