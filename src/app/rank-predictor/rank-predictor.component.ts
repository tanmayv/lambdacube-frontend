import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
             private storageService: StorageService, private titleService: Title) { }
  userInput: RankPredictorInput = new RankPredictorInput("", "", "", 0, "CRL");
  rankPrediction: Observable<RankInfo> = of(new RankInfo());
  submitted = false;   
  
  ngOnInit(): void {
    this.titleService.setTitle("Lambdacube rank predictor 2021");
    const userInfo: any = this.storageService.getUserInfo();
    this.userInput = {...this.userInput, ...userInfo };
  }

  onSubmit(userForm: any) {
    this.submitted = true;
    if(!userForm.valid) return;
    this.predictorService.trackUser(this.userInput.name, this.userInput.email, this.userInput.phone, {
      type: "rank-prediction",
      marks: this.userInput.marks,
      category: this.userInput.category
    }).subscribe();
    this.storageService.setUserInfo({name: this.userInput.name, email: this.userInput.email, phone: this.userInput.phone});
    this.rankPrediction = this.predictorService.predictRank(this.userInput.marks, this.userInput.category);
  }

  navToCollegePredictor(rank: number) {
    this.router.navigate(["college-predictor"], {queryParams: {rank: rank}});
  }
}
