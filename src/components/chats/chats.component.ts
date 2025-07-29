import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, Inject, PLATFORM_ID, ViewChild, ElementRef, Input } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.scss'
})
export class ChatsComponent {

  @Input() mode : 'chatsOnly' | 'chatsWithMembers' = 'chatsOnly';

  chats = [
    {type: 'received', name:'Soundarya', image: 'https://placehold.co/40x40', message:'Hey.. Hope everything going great on your side', time:'23 Jan 2:00 AM'},
    {type: 'sent', name:'RP', image:'assets/rp.png', message:'Hi, Everything Perfect. How about you', time:'23 Jan 2:01 AM'},
    {type: 'received', name:'Soundarya', image:'http://placehold.co/40x40', message:"All good, Let's catch up soon", time:'23 Jan 2:02 AM'},
    {type: 'sent', name:'RP', image:'assets/rp.png', message:'Let me know your free time', time:'23 Jan 2:03 AM'},
  ]

  members = [
    {name:'Pavan', image:'assets/rp.png', time: 'Yesterday'},
    {name:'Nandu', image:'https://placehold.co/40x40', time: 'Today'},
    {name:'Soundi', image:'https://placehold.co/40x40', time: 'Yesterday'},
    {name:'Mallikarjun', image:'https://placehold.co/40x40', time: 'Yesterday'},
    {name:'RP', image:'https://placehold.co/40x40', time: 'Today'},
    {name:'Suji', image:'https://placehold.co/40x40', time: 'Yesterday'},
    {name:'Pavan', image:'https://placehold.co/40x40', time: 'Yesterday'},
    {name:'Nandu', image:'https://placehold.co/40x40', time: 'Today'},
  ]
}
