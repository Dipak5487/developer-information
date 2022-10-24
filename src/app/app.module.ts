import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLogInComponent } from './user-log-in/user-log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UserLogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
