import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { CartModule } from './cart/cart.module';
import { FormModule } from './form/form.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ArtistModule } from './artist/artist.module';
import { CheckoutModule } from './checkout/checkout.module';
import { SearchModule } from './search/search.module';
import { FooterModule } from './footer/footer.module';
import { AlbumModule } from './album/album.module';
import { ItemModule } from './item/item.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    FormModule,
    CartModule,
    DashboardModule,
    ArtistModule,
    CheckoutModule,
    SearchModule,
    FooterModule,
    AlbumModule,
    ItemModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
