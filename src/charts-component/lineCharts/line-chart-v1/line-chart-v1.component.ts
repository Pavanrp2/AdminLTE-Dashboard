import { CommonModule, isPlatformBrowser} from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, PLATFORM_ID, Inject} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-line-chart-v1',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './line-chart-v1.component.html',
  styleUrl: './line-chart-v1.component.scss'
})
export class LineChartV1Component {
  constructor(@Inject(PLATFORM_ID) private platformID: object){}
  @ViewChild('lineChart') lineChartRef!: ElementRef;

  mychart : echarts.ECharts | null = null;
  
  ngAfterViewInit(): void{
    if(isPlatformBrowser(this.platformID)){
      const lineChartDom = this.lineChartRef.nativeElement;
      const myChart = echarts.init(lineChartDom);
      
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener('resize', ()=>{
        this.mychart?.resize()
      })
    }
  }
}
