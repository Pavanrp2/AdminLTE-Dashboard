import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() version : 'v1' | 'v2' | 'v3' = 'v1';

  cards_v1 = [
    {
      value: 150,
      label: 'New Orders',
      icon: 'bi bi-handbag',
      footer: 'More Info',
      bg_color: '#17a2b8'
    },
    {
      value: 53,
      label: 'bounce rate',
      icon: 'bi bi-graph-up',
      footer: 'More Info',
      bg_color: '#28a745'
    },
    {
      value: 44,
      label: 'user registrations',
      icon: 'bi bi-person-plus',
      footer: 'More Info',
      bg_color: '#ffc107'
    },
    {
      value: 65,
      label: 'unique visitors',
      icon: 'bi bi-eye',
      footer: 'More Info',
      bg_color: '#dc3545'
    }
  ]

  cards_v2 = [
    {
      value: '10%' ,
      label: 'CPU Traffic',
      icon: 'bi bi-gear-fill',
      bg_icon: '#17a2b8'
    },
    {
      value: 11000,
      label: 'Likes',
      icon: 'bi bi-hand-thumbs-up-fill',
      bg_icon: '#dc3545'
    },
    {
      value: 760 ,
      label: 'Sales',
      icon: 'bi bi-cart-fill',
      bg_icon: '#28a745'
    },
    {
      value: 2000,
      label: 'New Members',
      icon: 'bi bi-people-fill',
      bg_icon: '#ffc107'
    }
  ]

  mapCards = [
    {
      icon:'bi bi-tag-fill',
      title:'Inventory',
      value:'5,200',
      bg_color:'#ffc107'
    },
    {
      icon:'bi bi-heart',
      title:'Mentions',
      value:'92,050',
      bg_color:'#28a745'
    },
    {
      icon:'bi bi-cloud-arrow-down-fill',
      title:'Downloads',
      value:'114,381',
      bg_color:'#dc3545'
    },
    {
      icon:'bi bi-chat',
      title:'Direct Messages',
      value:'163,921',
      bg_color:'#17a2b8'
    },
  ]
}
