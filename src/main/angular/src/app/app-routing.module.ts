import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent} from "./aboutUs/aboutUs.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashhomeComponent } from "./dashhome/dashhome.component";
import { CreateOrderComponent } from "./create-order/create-order.component";
import { OrderDetailComponent } from "./order-detail/order-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dashboard',
    component: DashboardComponent,
    children:[
      { path: '', redirectTo: 'dashhome', pathMatch: 'full'},
      { path: 'dashhome', component:DashhomeComponent, outlet:'aux' },
      { path: 'createorder', component: CreateOrderComponent, outlet:'aux'},
      { path: 'orderdetail', component: OrderDetailComponent, outlet: 'aux'}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true } )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
