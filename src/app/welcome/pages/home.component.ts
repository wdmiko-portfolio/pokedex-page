import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { PokedexGridComponent } from '../components/pokedex-grid/pokedex-grid.component';
import { PokemonApiService } from '../../z-services/pokemon-api.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DropdownComponent } from '../../components/dropdown.component';
import { SurpriseButtonComponent } from '../../components/surprise-button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  imports:[HeaderComponent, PokedexGridComponent,NgxSpinnerModule,DropdownComponent,SurpriseButtonComponent],
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
