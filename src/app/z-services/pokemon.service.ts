import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { HeaderComponent } from '../welcome/components/header/header.component';
import { Router } from '@angular/router';
import { PokemonApiService } from './pokemon-api.service';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonSource = new BehaviorSubject<any[]>([]);
  selectedPokemon$ = this.pokemonSource.asObservable();
  pokemon: any;
  pokemonDetails:any=[] ;
  pokemonPrevious:any=[];
  pokemonNext:any=[];
  species:any=[]
  weaknessesList:any=[]
  constructor(  private pokemonApi: PokemonApiService,
    private route: Router) { }

  async setPokemonDetails(details: any) {
    this.pokemonSource.next(details);
    localStorage.setItem('pokemonDetails', JSON.stringify(details)); // Guardar en localStorage

  }

  loadPokemonDetails() {
    const savedDetails = localStorage.getItem('pokemonDetails');
    if (savedDetails) {
      this.pokemonSource.next(JSON.parse(savedDetails)); // Recuperar desde localStorage
    }
  }

 
  async catchPokemon(pokemon:any) {

    try {

      const arr = await firstValueFrom(this.pokemonApi.getPokemonDetails(pokemon))as any;
      await this.getSpecies(arr.species.url) as any;
      await this.getWeaknesses(arr.types) as any;
      const category =await this.species.genera.find((genera: { language: { name: string }; genus: string }) => {
      return genera.language.name === 'en'; // Devuelve el genera si el idioma es 'en'
    })?.genus; // Accede al genus directamente si existe

      this.pokemonDetails = {
        id: arr.id.toString().padStart(3, '0'),
        pokemon_id:arr.id,
        name: arr.name,
        sprite: arr.sprites.other.home.front_default,
        stats: arr.stats,
        types: arr.types,
        abilities: arr.abilities,
        species: this.species,
        weight:arr.weight,
        height:arr.height,
        category_pokemon:category,
        weaknesses:this.weaknessesList
      };


      await this.setPokemonDetails(this.pokemonDetails);
      
      return this.pokemonDetails

 
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
    } finally {
    }
  }


  async getSpecies(arr:any){
    const speciesResponse = await fetch(arr) as any;
    this.species = await speciesResponse.json();
  }


  

  
async getWeaknesses(weakness:any) {
  const typeUrls = weakness.map((t: any) => t.type.url);
  const damageRelations = await Promise.all(
    typeUrls.map(async (url: string) => {
      const typeResponse = await fetch(url);
      const typeData = await typeResponse.json();
      return typeData.damage_relations;
    })
  );

  // Combine weaknesses (double_damage_from) for all types
  const weaknesses: any[] = [];
  await Promise.all(damageRelations.map(async (relation) => {
    await relation.double_damage_from.forEach((type: any) => {
      weaknesses.push(type.name);
    });
  }));

  this.weaknessesList = weaknesses;
}
}
