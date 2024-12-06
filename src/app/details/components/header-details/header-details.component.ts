import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PokemonApiService } from '../../../z-services/pokemon-api.service';
import { PokemonService } from '../../../z-services/pokemon.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-header-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header-details.component.html',
  styleUrls: ['./header-details.component.css']
})
export class HeaderDetailsComponent implements OnInit {
  @Input() pokemonDetails: any;
  pokemonPrevious:any;
  pokemonNext:any;
  private pokemon_id:any;
  constructor(private pokemonApi:PokemonApiService,private route: ActivatedRoute,private router :Router, private pokemonService:PokemonService,
  ){

  }

  ngOnInit(): void {
   
  }

  
  ngOnChanges() {
    if (this.pokemonDetails) {
      this.getNext(this.pokemonDetails.pokemon_id)

    }
  }

  async getNext(id:any){

    try{
      this.pokemonPrevious = await firstValueFrom(this.pokemonApi.getPokemonDetails(id== 1 ? 898 : id-1))as any;
      this.pokemonNext = await firstValueFrom(this.pokemonApi.getPokemonDetails(id== 898 ? 1 : id+1))as any;
    
    }catch(error){console.log(error)}

  }

  async sendToCatch(id:any){
    try{
      this.router.navigate(['/details', id],{ queryParams: { pokemon: true } });

    }catch{}
}

  
}
