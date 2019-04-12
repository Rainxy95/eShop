import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artists = [];
  page = 1;
  constructor(
    private artistService: ArtistService,
  ) { }

  ngOnInit() {
    this.getArtists(this.page);
  }
  getArtists(page) {
    this.artistService.getArtists(page).
      subscribe(artists => {
        this.artists = this.artists.concat(artists);
      });
  }

  showMore() {
    this.getArtists(++this.page);
  }

}
