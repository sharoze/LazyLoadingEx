import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ODC1Component } from './odc1.component';

const routes: Routes = [{ path: '', component: ODC1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ODC1RoutingModule { }
