import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist/artist.component';
import { ItemModule } from '../item/item.module';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';

@NgModule({
  declarations: [ArtistComponent, ArtistDetailComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    ItemModule
  ]
})
export class ArtistModule { }
