import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistService } from '../../artist/artist.service';
import { AlbumService } from '../../album/album.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topArtists$:Observable<any>;
  topAlbums$:Observable<any>;
  newAlbums$:Observable<any>
  constructor(
    private artistService:ArtistService,
    private albumService:AlbumService
  ) { }

  ngOnInit() {
    this.topAlbums$=this.albumService.getTopAlbums();
    this.topArtists$=this.artistService.getTopArtists();
    this.newAlbums$=this.albumService.getNewAlbums();
  }

}
