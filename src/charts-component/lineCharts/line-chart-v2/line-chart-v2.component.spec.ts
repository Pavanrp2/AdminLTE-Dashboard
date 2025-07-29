import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartV2Component } from './line-chart-v2.component';

describe('LineChartV2Component', () => {
  let component: LineChartV2Component;
  let fixture: ComponentFixture<LineChartV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChartV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
