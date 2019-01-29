import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashhomeComponent} from "./dashhome/dashhome.component";

const secondaryroutes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dashhome', component:DashhomeComponent, outlet:'let2' }
];

@NgModule({
  imports: [RouterModule.forChild(secondaryroutes)],
  exports: [RouterModule]
})

export class AppMainRoutingModule { }
