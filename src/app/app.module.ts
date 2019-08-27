import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //import form modules
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactformComponent } from './contactform/contactform.component';

import {Routes, RouterModule} from '@angular/router';  // 1R.import route modules : Routs is datatype, routermodule supports it.
import {ViewComponent} from './view/view.component';
import { SearchComponent } from './search/search.component';
import { ViewSingleComponent } from './view-single/view-single.component';


const appRoutes:Routes=[                                  //2R. set approutes
  {path:'', component:ContactformComponent},
  {path:'view', component:ViewComponent},
  {path:'search', component:SearchComponent},
  {path:'viewsingle', component:ViewSingleComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactformComponent,
    ViewComponent,
    SearchComponent,
    ViewSingleComponent
  ],
  imports: [                              
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)                             //3R. add routermodules & approiutes
  ],
  
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
