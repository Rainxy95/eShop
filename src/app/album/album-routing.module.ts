import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistDetailComponent } from '../artist/artist-detail/artist-detail.component'

const routes: Routes = [
  {path:'artists/:id',component:ArtistDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
