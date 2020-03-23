import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "ODC1",
    loadChildren: () => import("./odc1/odc1.module").then(m => m.ODC1Module)
  },
  {
    path: "ODC2",
    loadChildren: () => import("./odc2/odc2.module").then(m => m.ODC2Module)
  },
  {
    path: "ODC3",
    loadChildren: () => import("./odc3/odc3.module").then(m => m.ODC3Module)
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
