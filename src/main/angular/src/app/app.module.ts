import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from "@angular/material";

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
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AcceptDialogComponent } from './accept-dialog/accept-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOrderComponent } from './my-order/my-order.component';
import { CompleteDialogComponent } from './complete-dialog/complete-dialog.component';
import { CreatedOrderListComponent } from './created-order-list/created-order-list.component';
import { AcceptedOrderListComponent } from './accepted-order-list/accepted-order-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RateOrderDialogComponent } from './rate-order-dialog/rate-order-dialog.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';

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
    AlertComponent,
    UserprofileComponent,
    AcceptDialogComponent,
    MyOrderComponent,
    CompleteDialogComponent,
    CreatedOrderListComponent,
    AcceptedOrderListComponent,
    RateOrderDialogComponent,
    PublicProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [
    OrderService,
    UserService,
    AlertService
    ],
  bootstrap: [AppComponent],
  entryComponents: [AcceptDialogComponent, CompleteDialogComponent, RateOrderDialogComponent]
})

export class AppModule { }
