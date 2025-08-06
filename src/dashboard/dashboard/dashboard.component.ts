import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { AreaChartComponent } from '../../charts-component/areaCharts/area-chart/area-chart.component';
import { ChatsComponent } from '../../components/chats/chats.component';
import { LineChartV1Component } from '../../charts-component/lineCharts/line-chart-v1/line-chart-v1.component';
import { MapsComponent } from '../../components/maps/maps.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { TablesComponent } from '../../components/tables/tables.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AreaChartV2Component } from '../../charts-component/areaCharts/area-chart-v2/area-chart-v2.component';
import { PieChartV1Component } from '../../charts-component/pieChart/pie-chart-v1/pie-chart-v1.component';
import { LineChartV2Component } from '../../charts-component/lineCharts/line-chart-v2/line-chart-v2.component';
import { BarChartComponent } from '../../charts-component/bar-chart/bar-chart.component';
import { CommonModule } from '@angular/common';
import { IconsComponent } from '../../components/icons/icons.component';
import { LiveCalendarComponent } from '../../components/live-calendar/live-calendar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule, SidebarComponent,NavBarComponent, IconsComponent, HeaderComponent, CardsComponent,
    AreaChartComponent,AreaChartV2Component, PieChartV1Component, LineChartV2Component,BarChartComponent, ChatsComponent, 
    LineChartV1Component, MapsComponent, LiveCalendarComponent, TablesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isSidebarCollapsed: boolean = false;

  handleSidebarToggle(){
    this.isSidebarCollapsed = !this.isSidebarCollapsed
  }
}
