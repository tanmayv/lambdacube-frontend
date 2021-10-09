import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CollegePredictorInput, RankPredictorInput } from '../rank-predictor/rank-predictor-input';
import { CollegePredictorService } from './college-predictor.service';

@Component({
  selector: 'app-college-predictor',
  templateUrl: './college-predictor.component.html',
  styleUrls: ['./college-predictor.component.scss']
})
export class CollegePredictorComponent implements OnInit {

  constructor(private router: Router, private collegePredictorService: CollegePredictorService) { }
  userInput: CollegePredictorInput = new CollegePredictorInput("", "", "", 0, "OPEN", "Gender-Neutral");
  rankPrediction: any;
  colleges$: Observable<any[]> = of([]);

  ngOnInit(): void {
    console.log(this.colleges$)
  }

  onSubmit() {
    this.colleges$ = this.collegePredictorService.predict(this.userInput.rank, this.userInput.category, this.userInput.seatPool);
  }

  navToRankPredictor() {
    this.router.navigate(["rank-predictor"], {queryParams: {rank: "100"}});
  }
}
function tap(arg0: () => void): import("rxjs").OperatorFunction<import("../college/college-info").CollegeInfo[], any[]> {
    throw new Error('Function not implemented.');
}

