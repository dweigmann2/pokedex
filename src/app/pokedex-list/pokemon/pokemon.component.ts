import { map } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { GetPokemonService } from './get-pokemon.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {

  @Input() url:string = ''
  @Input() name:string = ''

  ngOnInit(): void {
  }

}
