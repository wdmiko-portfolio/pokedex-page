import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  template: `
 <button 
  class="custom-button animation-press" 
  [ngClass]="[color, textcolor]" 
  [disabled]="disabled"
>
  {{ text }}
</button>
`,
  styles:  [`
    .custom-button {
      font-size: 16px;
      padding: 8px 16px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
    }
    `]
})
export class ButtonComponent {
  @Input() color: string = ''; // Clase de color
  @Input() textcolor: string = ''; // Clase de color

@Input() disabled: boolean = false; // Deshabilitar el botón
@Input() text: string = ''; // Deshabilitar el botón

}
