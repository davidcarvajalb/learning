import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}  from './app.component';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';

import { routing,
         appRoutingProviders } from './app.routing';

@NgModule({
  imports: [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent, AboutComponent, SearchComponent ],
  providers: [ appRoutingProviders ],  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
