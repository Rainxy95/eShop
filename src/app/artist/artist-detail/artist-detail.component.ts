import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../artist.service';
import { Subscription } from '../../../../node_modules/rxjs';
@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit, OnDestroy {
  artist$:Subscription;
  artist:any;
  numberOfPage:number;
  itemsPerPage:number=6;
  pageNumbers:number[];
  currentPage:number=1;
  displayItems:Object[];
  constructor(
    private artistService:ArtistService,
    private rout:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getArtistDetail()
  }

  getArtistDetail(){
    let id = this.rout.snapshot.paramMap.get('id')
    this.artist$ = this.artistService.getArtistDetail(id)
    .subscribe(artist=>{
      this.artist = artist
      this.numberOfPage = Math.ceil(this.artist.albums.length/this.itemsPerPage)
      this.pageNumbers = Array(this.numberOfPage).fill(1).map((value, index)=>++index)
      this.displayItems = this.artist.albums.slice((this.currentPage-1)*this.itemsPerPage,this.currentPage*this.itemsPerPage)
    })
  }
  setCurrentPage(page:number){
    this.currentPage = page
    this.displayItems = this.artist.albums.slice((this.currentPage-1)*this.itemsPerPage,this.currentPage*this.itemsPerPage)
  }

  ngOnDestroy(){
    this.artist$.unsubscribe();
  }

}
