import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //import form modules
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactformComponent } from './contactform/contactform.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent,NavbarComponent,ContactformComponent]
})
export class AppModule { }
