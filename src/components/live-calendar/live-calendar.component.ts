import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-calendar.component.html',
  styleUrl: './live-calendar.component.scss'
})
export class LiveCalendarComponent implements OnInit {
  days =['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  weeks: (number | null)[][] =[]
  currentMonthIndex : number = 0;
  currentMonth : string = '';
  currentYear: number = 0;
  today : Date = new Date();

  ngOnInit(): void {
    this.currentMonthIndex = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.generateCalendar( this.currentMonthIndex, this.currentYear);
      
  }

  generateCalendar(month:number, year:number): void{
    const date = new Date(year, month);
    this.currentMonth = date.toLocaleString('default', {month:'long'});
    this.currentMonthIndex = date.getMonth();
    this.currentYear = date.getFullYear();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month+1, 0);
    const startDayIndex = firstDay.getDay();
    const totalDays = lastDay.getDate();

    const daysArray : (number | null )[] = [];
    for(let i=0; i < startDayIndex; i++){
      daysArray.push(null)
    }

    for(let i=1; i<=totalDays; i++){
      daysArray.push(i)
    }

    this.weeks = [];
    for(let i=0; i<daysArray.length; i+=7){
      this.weeks.push(daysArray.slice(i, i+=7))
    }
  }
  changeMonth(step:number): void {
    let newMonth = this.currentMonthIndex + step;
    let newYear = this.currentYear;

    if(newMonth > 11){
      newMonth = 0;
      newYear++;
    } else if(newMonth < 0){
      newMonth = 11
      newYear--
    }

    this.generateCalendar(newMonth, newYear)
  }
  isToday(day:number | null): boolean {
    if(day===null) return false;
    const today = new Date();
    return(
      day === today.getDate() && 
      this.currentMonthIndex == today.getMonth() &&
      this.currentYear == today.getFullYear()
    );
  }
}
