import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ODC3RoutingModule } from './odc3-routing.module';
import { ODC3Component } from './odc3.component';


@NgModule({
  declarations: [ODC3Component],
  imports: [
    CommonModule,
    ODC3RoutingModule
  ]
})
export class ODC3Module { }
