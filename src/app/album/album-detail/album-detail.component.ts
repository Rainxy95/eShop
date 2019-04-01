import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album:any;
  constructor(
    private albumService: AlbumService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAlbumDetail()
  }
  getAlbumDetail(){
    let id = this.activeRoute.snapshot.paramMap.get('id')
    this.albumService.getAlbumDetail(id)
      .subscribe(album=>this.album=album)
  }
}
