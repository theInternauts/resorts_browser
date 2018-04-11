import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseChartDetailComponent } from './course-chart-detail.component';

describe('CourseChartDetailComponent', () => {
  let component: CourseChartDetailComponent;
  let fixture: ComponentFixture<CourseChartDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseChartDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseChartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
