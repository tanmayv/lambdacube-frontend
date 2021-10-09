import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegePredictorComponent } from './college-predictor.component';

describe('CollegePredictorComponent', () => {
  let component: CollegePredictorComponent;
  let fixture: ComponentFixture<CollegePredictorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegePredictorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegePredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
