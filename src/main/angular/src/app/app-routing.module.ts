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
import { UserprofileComponent } from './userprofile/userprofile.component';
import { MyOrderComponent } from "./my-order/my-order.component";
import { PublicProfileComponent } from "./public-profile/public-profile.component";

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
      { path: 'profile', component:UserprofileComponent, outlet:'aux' },
      { path: 'createorder', component: CreateOrderComponent, outlet:'aux'},
      { path: 'myorder', component: MyOrderComponent, outlet:'aux'},
      { path: 'orderdetail/:orderid', component: OrderDetailComponent, outlet: 'aux'},
      { path: 'publicprofile/:userid', component: PublicProfileComponent, outlet: 'aux'},
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true, onSameUrlNavigation: 'reload'} )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
