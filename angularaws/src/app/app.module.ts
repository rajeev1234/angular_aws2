import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RestapiComponent } from './restapi/restapi.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from "@angular/common/http";
import {AuthorizationService} from "./shared/authorization.service";
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { UserdetailComponent } from './userdetail/userdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    RestapiComponent,
    LoginComponent,
    HeaderComponent,
    PostdetailComponent,
    UserdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
