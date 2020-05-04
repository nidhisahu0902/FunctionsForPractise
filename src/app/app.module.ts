import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { AllmemberComponent } from './allmember/allmember.component';
import { ShowComponent } from './show/show.component';




@NgModule({
  declarations: [
    AppComponent,
    AddmemberComponent,
    AllmemberComponent,
    ShowComponent,
  
 

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
