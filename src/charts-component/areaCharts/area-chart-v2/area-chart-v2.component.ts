import { CommonModule, isPlatformBrowser} from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, PLATFORM_ID, Inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as echarts from 'echarts';

@Component({
  selector: 'app-area-chart-v2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './area-chart-v2.component.html',
  styleUrl: './area-chart-v2.component.scss'
})
export class AreaChartV2Component implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformID: object){}
  @ViewChild ('areaChart') areaChartRef!: ElementRef;

  myChart : echarts.ECharts | null = null;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformID)) return;
  
    // ECharts for Area Chart
    if (this.areaChartRef?.nativeElement) {
      const chartDom = this.areaChartRef.nativeElement;
      const myChart = echarts.init(chartDom);
      const option = {
        xAxis: { type: 'category', boundaryGap: false, data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
        yAxis: { type: 'value' },
        series: [{ data: [10, 20, 30, 40, 50, 60, 70], type: 'line', areaStyle: {} }]
      };
      myChart.setOption(option);
      window.addEventListener('resize', ()=>{
        this.myChart?.resize()
      })
    }
  }

  goalCompletion = [
    {title: 'Add Products to Cart', value: '160', totalValue: '200'},
    {title: 'Complete Purchase', value: '310', totalValue: '400'},
    {title: 'Visit Premium Page', value: '480', totalValue: '800'},
    {title: 'Send Inquiries', value: '250', totalValue: '500'},
  ]

  profits =[
    {percentage: '17%', header:'$35,210.43', text:'TOTAL REVENUE'},
    {percentage: '17%', header:'$10,390.90', text:'TOTAL COST'},
    {percentage: '17%', header:'$24,813.53', text:'TOTAL PROFIT'},
    {percentage: '17%', header:'1200', text:'GOAL COMPLETION'}
  ]

}
