import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { AppComponent } from './app.component';
import { RouterOutlet, RouterModule }		  from '@angular/router';
import { appRoutingProviders, routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MdButtonModule, 
  MdCheckboxModule, 
  MdInputModule, 
  MdToolbarModule, 
  MdTabsModule, 
  MdMenuModule, 
  MdIconModule,
  MdCardModule,
  MdSnackBarModule} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { GrabpageComponent } from './grabpage/grabpage.component';
import { LoginService } from './services/login.service';
import { GrabService } from './services/grab.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TitlebarComponent,
    GrabpageComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdTabsModule,
    MdMenuModule,
    MdIconModule,
    MdCardModule,
    FlexLayoutModule,
    MdSnackBarModule,
    HttpModule
  ],
  providers: [
    LoginService,
    GrabService
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
