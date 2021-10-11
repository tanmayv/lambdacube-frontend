import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CollegePredictorService } from '../college-predictor/college-predictor.service';
import { StorageService } from '../shared/storage.service';
import { RankInfo } from './rank-info';
import { RankPredictorInput } from './rank-predictor-input';

@Component({
  selector: 'app-rank-predictor',
  templateUrl: './rank-predictor.component.html',
  styleUrls: ['./rank-predictor.component.scss']
})
export class RankPredictorComponent implements OnInit {

  constructor(private router: Router, private predictorService: CollegePredictorService,
             private storageService: StorageService) { }
  userInput: RankPredictorInput = new RankPredictorInput("", "", "", 0, "OPEN");
  rankPrediction: Observable<RankInfo> = of(new RankInfo());
   
  
  ngOnInit(): void {
    const userInfo: any = this.storageService.getUserInfo();
    this.userInput = {...this.userInput, ...userInfo };
  }

  onSubmit() {
    this.predictorService.trackUser(this.userInput.name, this.userInput.email, this.userInput.phone, {
      type: "rank-prediction",
      marks: this.userInput.marks,
      category: this.userInput.category
    }).subscribe();
    this.storageService.setUserInfo({name: this.userInput.name, email: this.userInput.email, phone: this.userInput.phone});
    this.rankPrediction = this.predictorService.predictRank(this.userInput.marks);
  }

  navToCollegePredictor(rank: number) {
    this.router.navigate(["college-predictor"], {queryParams: {rank: rank}});
  }
}
