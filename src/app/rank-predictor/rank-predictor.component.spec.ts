import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankPredictorComponent } from './rank-predictor.component';

describe('RankPredictorComponent', () => {
  let component: RankPredictorComponent;
  let fixture: ComponentFixture<RankPredictorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankPredictorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankPredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
