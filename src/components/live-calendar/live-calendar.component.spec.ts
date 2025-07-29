import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCalendarComponent } from './live-calendar.component';

describe('LiveCalendarComponent', () => {
  let component: LiveCalendarComponent;
  let fixture: ComponentFixture<LiveCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
