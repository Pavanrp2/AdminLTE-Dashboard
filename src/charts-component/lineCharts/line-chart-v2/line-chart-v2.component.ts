import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, PLATFORM_ID, ViewChild, Inject, NgZone } from '@angular/core';
import * as echarts from 'echarts';
import { isPlatformBrowser } from '@angular/common';

type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-line-chart-v2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-chart-v2.component.html',
  styleUrl: './line-chart-v2.component.scss'
})
export class LineChartV2Component implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformID: object, private ngZone: NgZone){}
  @ViewChild ('lineChart') lineChartRef!: ElementRef;

  myChart : echarts.ECharts | null = null;

  ngAfterViewInit(): void{
    if (isPlatformBrowser(this.platformID)) {
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          // Line chart
          const lineChartDom = this.lineChartRef?.nativeElement;
          if (lineChartDom) {
            const lineChart = echarts.init(lineChartDom);
            lineChart.setOption({
              xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
              yAxis: { type: 'value' },
              series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }]
            });
          }
        }, 0); 
      });
      window.addEventListener('resize', ()=>{
        this.myChart?.resize();
      })
    }
  }
}
