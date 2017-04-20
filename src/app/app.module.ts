import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CollapseModule } from 'ng2-bootstrap';
import {TabsModule} from 'ng2-bootstrap';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routes';
import { HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
	HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
	TabsModule.forRoot(),
    CollapseModule.forRoot(),
	Angular2FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
