import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface DropdownOption {
  label: string;
  value: string;
}
@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="dropdown" (click)="toggleDropdown()">
      <div class="dropdown-header">
        <span>{{ selectedOption.label }}</span>
        <span class="arrow" [class.open]="isOpen">▼</span>
      </div>
      <div class="dropdown-content" [class.show]="isOpen">
        <div 
          class="dropdown-item" 
          *ngFor="let option of options" 
          (click)="selectOption(option)"
          [class.selected]="option.value === selectedOption.value"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dropdown {
      position: relative;
      width: auto;
      min-width:200px;
      user-select: none;
    }

    .dropdown-header {
      background-color: #2D2D2D;
      color: white;
      padding: 12px 16px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .dropdown-header:hover {
      background-color: #3D3D3D;
    }

    .arrow {
      font-size: 12px;
      transition: transform 0.3s;
    }

    .arrow.open {
      transform: rotate(180deg);
    }

    .dropdown-content {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: rgb(54, 54, 54);
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      margin-top: 4px;
      z-index: 1000;
      max-height: 300px;
      overflow-y: auto;
      color: white;
    }

    .dropdown-content.show {
      display: block;
    }

    .dropdown-item {
      padding: 12px 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      color: white;
      transition: background-color 0.2s;
    }

    .dropdown-item:hover {
      background-color: black;
    }

    .dropdown-item.selected {
      background-color: black;
      font-weight: 500;
    }

    .dropdown-content::-webkit-scrollbar {
      width: 8px;
    }

    .dropdown-content::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }

    .dropdown-content::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }

    .dropdown-content::-webkit-scrollbar-thumb:hover {
      background: #666;
    }
  `]
})
export class DropdownComponent {
  isOpen = false;
  @Output() orderby = new EventEmitter<string>();

  options: DropdownOption[] = [
    { label: 'Lowest Number (First)', value: 'number-asc' },
    { label: 'Highest Number (First)', value: 'number-desc' },
    { label: 'A-Z', value: 'alpha-asc' },
    { label: 'Z-A', value: 'alpha-desc' },
   
  ];

  selectedOption: DropdownOption = this.options[0];

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: any): void {
    this.selectedOption = option;
    this.isOpen = false;
    this.orderby.emit(option); // Emitimos el valor seleccionado
  }
}
