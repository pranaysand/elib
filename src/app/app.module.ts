import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
//Bootstrap NGX
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminComponent } from './components/admin/admin.component';
import {RouterModule,Routes} from "@angular/router";
import { AppRoutingModule } from './/app-routing.module';

//Creating Routes
const appRoute:Routes=[
  {path:'admin',component:AdminComponent},
 
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
   

   
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoute),
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
