import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ArtistItemComponent } from './artist-item/artist-item.component';
import { AlbumItemComponent } from './album-item/album-item.component';

@NgModule({
  declarations: [ArtistItemComponent, AlbumItemComponent],
  imports: [
    CommonModule,
    ItemRoutingModule
  ],
  exports:[
    ArtistItemComponent,
    AlbumItemComponent
  ]
})
export class ItemModule { }
