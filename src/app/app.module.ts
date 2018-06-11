import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { TestPipe } from './test.pipe';
import { PublicZoneComponent } from './public-zone/public-zone.component';
import { PrivateZoneComponent } from './private-zone/private-zone.component';
import { LoginComponent } from './login/login.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { DemoFormComponent } from './demo-form/demo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestPipe,
    PublicZoneComponent,
    PrivateZoneComponent,
    LoginComponent,
    DemoListComponent,
    DemoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   // MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
