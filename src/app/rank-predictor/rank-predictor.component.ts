import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CollegePredictorService } from '../college-predictor/college-predictor.service';
import { RankInfo } from './rank-info';
import { RankPredictorInput } from './rank-predictor-input';

@Component({
  selector: 'app-rank-predictor',
  templateUrl: './rank-predictor.component.html',
  styleUrls: ['./rank-predictor.component.scss']
})
export class RankPredictorComponent implements OnInit {

  constructor(private router: Router, private predictorService: CollegePredictorService) { }
  userInput: RankPredictorInput = new RankPredictorInput("", "", "", 0, "OPEN");
  rankPrediction: Observable<RankInfo> = of(new RankInfo());
  
  ngOnInit(): void {
  }

  onSubmit() {
    this.rankPrediction = this.predictorService.predictRank(this.userInput.marks);
  }

  navToCollegePredictor() {
    this.router.navigate(["college-predictor"], {queryParams: {rank: "100"}});
  }
}
