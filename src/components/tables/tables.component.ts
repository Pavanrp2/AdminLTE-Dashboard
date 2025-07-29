import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tables',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {

  @Input() version: 'v1' | 'v2' | 'v3' | 'v4' | 'v5' = 'v1';

  todoLists = [
    {id:1, task:"Eat 5 star do nothing", done:false},
    {id:2, task:"check your Notification", done:false},
    {id:3, task:"It ends with us", done:false},
    {id:4, task:"Awaking Lion", done:false},
    {id:5, task:"Done and Dusted", done:false}
  ];
  newTodoList = ''
  addItem(){
    const trimmed = this.newTodoList.trim();
    if(trimmed){
      this.todoLists.push({
        id:Date.now(),
        task:trimmed,
        done: false
      })
      this.newTodoList=''
    }
  }

  toggleTodo(todo: any){
    todo.done =! todo.done
  }

  orders = [
    {id:'OR333', order:"Jack Daniels", status:'shipped', popularity:'90,80,90,-70,61,-83,63'},
    {id:'OR9844', order:"Glen Fiddich", status:'pending', popularity:'90,80,90,-70,61,-83,63'},
    {id:'OR9802', order:"Iconiq", status:'prcessing', popularity:'90,80,90,-70,61,-83,63'},
    {id:'OR0110', order:"Johnie Walker", status:'Delivered', popularity:'90,80,90,-70,61,-83,63'},
    {id:'OR9740', order:"Rockford", status:'shipped', popularity:'90,80,90,-70,61,-83,63'}
  ];

  newProducts = [
    {name:'Samsung', price:'75000', image:'https://placehold.co/60x60', description: 'Samsung 32" 1080p 60Hz LED Smart HDTV.'},
    {name:'Macbook', price:'95000', image:'https://placehold.co/60x60', description: 'Samsung 14" 1080p 64Hz Laptop.'},
    {name:'Bicycle', price:'10500', image:'https://placehold.co/60x60', description: '26" Mongoose Dolomite Mens 7-speed, Navy Blue.'},
    {name:'Camera', price:'65000', image:'https://placehold.co/60x60', description: 'Canon 5D alpha.'}
  ]

  products = [
    {image:'https://placehold.co/40x40', name:'Red Label', price:'4000', sales:'1000 sold'},
    {image:'https://placehold.co/40x40', name:'Royal Stag', price:'1200', sales:'5000 sold'},
    {image:'https://placehold.co/40x40', name:'Magic Moment', price:'1000', sales:'3000 sold'},
    {image:'https://placehold.co/40x40', name:'Brocde', price:'200', sales:'500 sold'},
] 
}
