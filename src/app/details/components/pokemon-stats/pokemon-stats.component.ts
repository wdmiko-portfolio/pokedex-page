import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonApiService } from '../../../z-services/pokemon-api.service';
import { firstValueFrom, of } from 'rxjs';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationPlayer } from '@angular/animations';
import { AfterViewInit } from '@angular/core'; // Importar AfterViewInit

interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}
@Component({
  selector: 'app-pokemon-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-stats.component.html',
  styleUrl: './pokemon-stats.component.css'
})
export class PokemonStatsComponent implements OnInit, AfterViewInit  {
  public evolutions:any;
  @Input() pokemonDetails:any
  @Input() evolDetails:any
  public statsArray:any=[]
  public statsLines:any=[]
  public weaknessesList:any=[];
  public showStats =false
  public species:any=[];
  public icon:any;
  constructor( private api: PokemonApiService, private spinner:NgxSpinnerService){

  }
  public baseMaxStat= 255;
  public baseLines=15
ngOnInit(): void {
}
async ngOnChanges() {
  this.showStats=false

  if (this.evolDetails) {
    
     this.evolutions = await Promise.all(this.evolDetails.map(async (pokemon: any) => {
      return firstValueFrom( this.api.getPokemonDetails(pokemon)) as any;
    }));
   
    await this.statsCreate()
    this.showStats=true
  }

}

async statsCreate() {
  this.statsArray = [];
  this.pokemonDetails.stats.forEach((stat: PokemonStat) => {
    this.statsArray.push({
      id: stat.stat.name,
      stat: stat.base_stat,
      stat_percent: Math.round((stat.base_stat/this.baseMaxStat)*(this.baseMaxStat/this.baseLines))
    });
  });
}


isActiveStat(stat: number){
  this.statsLines=[];

  for (let i = 0; i < this.baseLines; i++) {
    if(i < stat){
      this.statsLines.push({
        line_power:true
      })
    }else{
      this.statsLines.push({
        line_power:false
      })
    }
    
    }

    return this.statsLines
}

ngAfterViewInit(): void { // Método para ocultar el spinner
}
replaceNewline(text: string): string {
  return text.replace(/[\n\f]/g, ' ');
}
}
