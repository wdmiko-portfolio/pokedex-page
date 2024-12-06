import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-surprise-button',
  standalone: true,
  imports: [],
  template: `

    <button class="surprise-button animation-up-down" (click)="onSurpriseClick()">
       <a class="icon"(click)="onSurpriseClick()" >↻ Surprise Me!</a>
    </button>
  `,
  styles: [`
    .surprise-button {
      background-color: #00A7E1;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .surprise-button:hover {
      background-color: #0089b8;
    }

    .icon {
      font-size: 18px;
      
    }
  `]
})
export class SurpriseButtonComponent {
  public showMew=false;
  @Output() surprise = new EventEmitter <any>;
  onSurpriseClick() {
    this.surprise.emit();
  }
}