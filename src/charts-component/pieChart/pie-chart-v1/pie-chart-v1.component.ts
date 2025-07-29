import { CommonModule, isPlatformBrowser} from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, PLATFORM_ID, Inject} from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-pie-chart-v1',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './pie-chart-v1.component.html',
  styleUrls: ['./pie-chart-v1.component.scss']
})
export class PieChartV1Component implements AfterViewInit{

  constructor(@Inject(PLATFORM_ID) private platformID: object){}
  @ViewChild('pieChart') pieChartRef!: ElementRef;

  myChart : echarts.ECharts | null = null;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      if (this.pieChartRef?.nativeElement) {
        const chartDom = this.pieChartRef.nativeElement;
        const myChart = echarts.init(chartDom);
  
        const option: EChartsOption = {
          tooltip: { trigger: 'item' },
          legend: { top: '5%', left: 'center' },
          series: [{
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: { show: false, position: 'center' },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: { show: false },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }]
        };
        myChart.setOption(option);
        window.addEventListener('resize', () => myChart?.resize());
      }
    }
  }
  
}
