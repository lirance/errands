import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppMainRoutingModule } from "./appmain-routing.module";
import { DashhomeComponent } from './dashhome/dashhome.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashhomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppMainRoutingModule
  ],
  providers: [
    ],
  bootstrap: []
})

export class AppMainModule { }
