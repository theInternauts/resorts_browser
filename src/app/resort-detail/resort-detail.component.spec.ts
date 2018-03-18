import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortDetailComponent } from './resort-detail.component';

describe('ResortDetailComponent', () => {
  let component: ResortDetailComponent;
  let fixture: ComponentFixture<ResortDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
