import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';



@NgModule({
  declarations: [
    PokemonComponent,
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PokedexListModule { }
