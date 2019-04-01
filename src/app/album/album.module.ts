import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { CartModule } from '../cart/cart.module'

@NgModule({
  declarations: [
    AlbumDetailComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    CartModule
  ]
})
export class AlbumModule { }
