import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ODC2Component } from './odc2.component';

const routes: Routes = [{ path: '', component: ODC2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ODC2RoutingModule { }
