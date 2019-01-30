import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './aboutUs/aboutUs.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { UserService } from "./_services";

import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashhomeComponent} from "./dashhome/dashhome.component";
import {CreateOrderComponent} from "./create-order/create-order.component";
import {OrderDetailComponent} from "./order-detail/order-detail.component";
import {OrderService} from "./_services/order.service";

import { AlertService } from "./_services";
import { AlertComponent } from "./_directives";

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    DashhomeComponent,
    CreateOrderComponent,
    OrderDetailComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    OrderService,
    UserService,
    AlertService
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
