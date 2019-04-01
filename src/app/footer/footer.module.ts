import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FooterRoutingModule } from './footer/footer-routing.module'

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FooterRoutingModule
  ],
  exports:[
    FooterComponent
  ]
})
export class FooterModule { }
