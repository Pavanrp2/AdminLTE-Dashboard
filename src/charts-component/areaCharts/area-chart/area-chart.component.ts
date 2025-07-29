import { CommonModule, isPlatformBrowser} from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, PLATFORM_ID, Inject} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-area-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './area-chart.component.html',
  styleUrl: './area-chart.component.scss'
})
export class AreaChartComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformID: object){}
  @ViewChild ('areaChart') areaChartRef!: ElementRef;

  myChart: echarts.ECharts | null = null;

  ngAfterViewInit(): void{
    if(isPlatformBrowser(this.platformID)){
      const chartDom = this.areaChartRef.nativeElement;
      const myChart = echarts.init(chartDom);
  
      const option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90],
            type: 'line',
            areaStyle: {}
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener('resize', () => {
        this.myChart?.resize();
      });
    }
  }

}
