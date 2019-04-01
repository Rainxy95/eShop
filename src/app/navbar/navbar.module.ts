import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CartNavComponent } from './cart-nav/cart-nav.component';
import { FormModule } from '../form/form.module'

@NgModule({
  declarations: [NavbarComponent, CartNavComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    FormModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
