import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';

import { routing,
         appRoutingProviders } from './app.routing';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, AboutComponent, SearchComponent ],
  providers: [ appRoutingProviders ],  
  bootstrap: [ AppComponent ]
})
export class AppModule { }