import { Injectable } from '@angular/core';
import { UrlService } from '../url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(
    private url: UrlService,
    private http: HttpClient
    ) { }
  getTopArtists(): Observable<any> {
    return this.http.get<any>(this.url.build('/artists/hot'));
  }
  getArtists(page: number): Observable<any> {
    return this.http.get<any>(this.url.build('/artists', {p: page}));
  }
  getArtistDetail(id): Observable<any> {
    return this.http.get<any>(this.url.build(`/artists/${id}`));
  }
}
