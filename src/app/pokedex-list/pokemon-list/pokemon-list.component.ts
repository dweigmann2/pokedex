import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { GetPokemonService } from '../pokemon/get-pokemon.service';
import { Pokemon } from '../pokemon/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemons:Pokemon[] = []

  constructor( getPokemonService: GetPokemonService) {
    getPokemonService.listPokemons()
    .pipe(
      map(value => value.results)
    )
    .subscribe(getApi => this.pokemons = getApi)
  }

  ngOnInit(): void {
  }

}
