import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemModule } from '../item/item.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ItemModule
  ]
})
export class DashboardModule { }
