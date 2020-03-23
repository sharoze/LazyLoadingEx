import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ODC1RoutingModule } from './odc1-routing.module';
import { ODC1Component } from './odc1.component';


@NgModule({
  declarations: [ODC1Component],
  imports: [
    CommonModule,
    ODC1RoutingModule
  ]
})
export class ODC1Module { }
