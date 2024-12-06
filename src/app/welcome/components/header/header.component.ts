import { Component, signal, Signal } from '@angular/core';
import { PokemonApiService } from '../../../z-services/pokemon-api.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonService } from '../../../z-services/pokemon.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { async, catchError, firstValueFrom, Observable } from 'rxjs'; // Importa el método de rxjs

interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  stats: [];
  types: [];
  abilities: [];
  species: [];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule, NgxSpinnerModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pokemon: any;
  pokemonDetails:any=[] ;
  pokemonPrevious:any=[];
  pokemonNext:any=[];
  pokemonDetailsSignal: Signal<any> = signal<any>(null);
  species:any=[]
  weaknessesList:any=[]
  constructor(
    private spinner: NgxSpinnerService,
    private pokemonApi: PokemonApiService,
    private route: Router,
    private pokemonService: PokemonService
  ) {}

  async catchPokemon(pokemon:any) {

    try {
      
      this.pokemonDetails= await this.pokemonService.catchPokemon (pokemon.toLowerCase())
      this.route.navigate(['/details', this.pokemonDetails.pokemon_id], { queryParams: {pokemon: false } });
    } catch (error) {
      alert("nombre o numero de pokemon desconocido")
      // console.error('Error fetching Pokémon details:', error);
    } finally {
    }
  }


}
