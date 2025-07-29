import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Output() sidebarToggle = new EventEmitter<void>();

  toggleSidebar(){
    this.sidebarToggle.emit();
  }
}
