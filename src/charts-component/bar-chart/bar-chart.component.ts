import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-bar-chart',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {
  @ViewChild('barChart') barChartRef!: ElementRef;
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private ngZone: NgZone) {}

  barChart : echarts.ECharts | null = null

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          const barChartDom = this.barChartRef?.nativeElement;
          if (barChartDom) {
            this.barChart = echarts.init(barChartDom);
            this.barChart.setOption({
              xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
              yAxis: { type: 'value' },
              series: [{ data: [120, 200, 150, 80, 70, 110, 130], type: 'bar' }]
            });
          }
        }, 0);
      });
      window.addEventListener('resize', ()=>{
        this.barChart?.resize()
      })
    }
  }

}
