import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumDetailComponent } from '../album/album-detail/album-detail.component';
import { ArtistDetailComponent } from '../artist/artist-detail/artist-detail.component';

const routes: Routes = [
  {path:'albums/:id', component:AlbumDetailComponent},
  {path:'artists/:id', component:ArtistDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
