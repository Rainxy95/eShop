import { Injectable } from '@angular/core';
import { UrlService } from '../url.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(
    private url:UrlService,
    private http:HttpClient
  ) { }
  getTopAlbums():Observable<any>{
    return this.http.get<any>(this.url.build('/albums/hot'))
  }
  getNewAlbums():Observable<any>{
    return this.http.get<any>(this.url.build('/albums/new'))
  }
  getAlbumDetail(id):Observable<any>{
    return this.http.get<any>(this.url.build(`/albums/${id}`))
  }
}
