import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ODC2RoutingModule } from './odc2-routing.module';
import { ODC2Component } from './odc2.component';


@NgModule({
  declarations: [ODC2Component],
  imports: [
    CommonModule,
    ODC2RoutingModule
  ]
})
export class ODC2Module { }
