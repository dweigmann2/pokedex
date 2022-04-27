import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"

@Injectable({
  providedIn: 'root'
})
export class GetPokemonService {

  constructor(private http:HttpClient) { }

  listPokemons(){
    return this.http.get<any>(API_URL)
  }
}
