import { Component, importProvidersFrom } from '@angular/core';
import { PokemonStatsComponent } from '../components/pokemon-stats/pokemon-stats.component';
import { HeaderDetailsComponent } from '../components/header-details/header-details.component';
import { PokemonService } from '../../z-services/pokemon.service';
import { PokemonApiService } from '../../z-services/pokemon-api.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button.component';


@Component({
  selector: 'app-details',
  standalone:true,
  imports:[PokemonStatsComponent, HeaderDetailsComponent,NgxSpinnerModule,RouterLink,ButtonComponent],
  providers:[],

  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  receivedPokemon: any[] = [];
  pokemonid:any;
  evolData:any;
  private pokemon_id:any;
  passDataEvolDetails:any;

  constructor(private spinner: NgxSpinnerService,private route: ActivatedRoute,private router:Router, private pokemonService: PokemonService, private pokemonApi:PokemonApiService){}

  ngOnInit() {
     
    this.pokemonService.loadPokemonDetails()

    this.pokemonService.selectedPokemon$.subscribe(details => {
      this.receivedPokemon = details;
    });

    this.route.queryParams.subscribe(queryParams => {
      const isInternal = queryParams['pokemon'] === 'true';
  
      if (isInternal) {
       
         this.route.params.subscribe(params => {
      this.pokemon_id = params['id']; // Obtiene el parámetro `id`
      this.pokemonService.catchPokemon(this.pokemon_id)
      this.pokemonid =this.pokemon_id

      this.getEvolutions();

    });
      } 
      else {
        this.pokemonid = this.route.snapshot.paramMap.get('id');
        this.getEvolutions();

        console.log('Navegación externa o carga directa');
      }
    });
   
    

   }

 

async getEvolutions() {
  try {
    const details = await firstValueFrom(this.pokemonApi.getPokemonEvolutions(this.pokemonid));
    this.evolData = details;
    this.getchain(this.evolData);
  } catch (error) {
    console.error("Error obteniendo evoluciones:", error);
  }
}



async getchain(data: any) {

  try {
    const details = await firstValueFrom(this.pokemonApi.getchainEvol(data.evolution_chain.url));
    this.passDataEvolDetails = await this.getAllEvolutions(details.chain);

  } catch (error) {
    console.error("Error al obtener la cadena de evolución", error);
  }

}

  async getAllEvolutions(chain: any, evolutions: string[] = []) {
    evolutions.push(chain.species.name);
    chain.evolves_to.forEach((evolution: any) => {
      this.getAllEvolutions(evolution, evolutions);
    });
    return evolutions; 
  }
 
}
