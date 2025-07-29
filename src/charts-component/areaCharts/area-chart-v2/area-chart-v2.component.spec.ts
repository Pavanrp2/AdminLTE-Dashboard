import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChartV2Component } from './area-chart-v2.component';

describe('AreaChartV2Component', () => {
  let component: AreaChartV2Component;
  let fixture: ComponentFixture<AreaChartV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaChartV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaChartV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
