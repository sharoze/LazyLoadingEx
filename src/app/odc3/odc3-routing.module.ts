import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ODC3Component } from './odc3.component';

const routes: Routes = [{ path: '', component: ODC3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ODC3RoutingModule { }
