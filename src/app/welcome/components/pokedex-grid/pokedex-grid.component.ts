import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, Output } from '@angular/core';
import { PokemonApiService } from '../../../z-services/pokemon-api.service';
import { DropdownComponent } from '../../../components/dropdown.component';
import { SurpriseButtonComponent } from '../../../components/surprise-button.component';
import { ButtonComponent } from '../../../components/button.component';
interface Pokemon {
  id:number;
  name: string;
  sprite: string;
  types: string;
}
@Component({
  selector: 'app-pokedex-grid',
  standalone: true,
  imports: [CommonModule,SurpriseButtonComponent,DropdownComponent,ButtonComponent],
  templateUrl: './pokedex-grid.component.html',
  styleUrls: ['./pokedex-grid.component.css']
})
export class PokedexGridComponent implements OnInit {
  pokemons: any[] = [];
  newpokemons: any[]=[];
  limit = 12;
  offset = 0;
  order:any;
  showMew=false
  constructor(private pokemonService: PokemonApiService) { }

  ngOnInit(): void {
    this.showMew=false;
    this.order="number-asc"
    this.loadPokemons();
  }
 
  loadPokemons(): void {
    this.pokemonService.getPokemons(this.limit, this.offset).subscribe((response: any) => {
      // Almacena los Pokémon actuales y los nuevos en una variable temporal
      const newPokemons: Pokemon[] = [];

      response.results.forEach((result: any) => {
        this.pokemonService.getPokemonDetails(result.name).subscribe((details: any) => {
          const pokemon: Pokemon = {
            id: details.id.toString().padStart(3, '0'),
            name: details.name,
            sprite: details.sprites.front_default,
            types: details.types
          };
          newPokemons.push(pokemon);

          // update pokemons
          if (newPokemons.length === response.results.length) {
            this.newpokemons=newPokemons;
            if(this.pokemons){
              this.newpokemons= [...this.pokemons, ...this.newpokemons];
              this.sortPokemons(this.order);
              this.pokemons=this.newpokemons

            }else{  this.sortPokemons(this.order);

              this.pokemons = [...this.pokemons, ...this.newpokemons];}
          

          }
        });
      });
    });
  }

  sortPokemons(order:any): void {

    if(order=="number-desc"){
      this.newpokemons.sort((a, b) => b.id - a.id);
    }
    else if(order=="number-asc"){ 
       this.newpokemons.sort((a, b) => a.id - b.id);
    }
    else if(order.value == "alpha-asc"){
      this.newpokemons.sort((a, b) => a.name.localeCompare(b.name));
    }
    else{
      this.newpokemons.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  newOrder(order:any){
    console.log(order.value)
    this.order =order.value
    if(order.value=="number-desc"){
     
      this.pokemons.sort((a, b) => b.id - a.id);
    }
    else if(order.value=="number-asc"){ 
      this.pokemons.sort((a, b) => a.id - b.id);
    }  
    else if(order.value == "alpha-asc"){
      this.pokemons.sort((a, b) => a.name.localeCompare(b.name));

    }
    else{
      this.pokemons.sort((a, b) => b.name.localeCompare(a.name));
    }

  }

  showMore(): void {
    this.offset += this.limit;
    this.loadPokemons();
  }

  getShowMew(){
    this.showMew = false; // Oculta el elemento

    setTimeout(() => {
      this.showMew = true; // Lo muestra nuevamente después de un ciclo
    }, 0); // Usa un retraso mínimo
  }

}

