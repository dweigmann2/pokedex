import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexListModule } from './pokedex-list/pokedex-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokedexListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
