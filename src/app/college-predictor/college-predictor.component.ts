import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CollegePredictorInput, RankPredictorInput } from '../rank-predictor/rank-predictor-input';
import { StorageService } from '../shared/storage.service';
import { CollegePredictorService } from './college-predictor.service';

@Component({
  selector: 'app-college-predictor',
  templateUrl: './college-predictor.component.html',
  styleUrls: ['./college-predictor.component.scss']
})
export class CollegePredictorComponent implements OnInit {

  constructor(private router: Router, private collegePredictorService: CollegePredictorService,
             private storageService: StorageService, private route: ActivatedRoute) {}
  userInput: CollegePredictorInput = new CollegePredictorInput("", "", "", 0, "OPEN", "Gender-Neutral");
  rankPrediction: any;
  colleges$: Observable<any[]> = of([]);

  ngOnInit(): void {
    const userInfo: any = this.storageService.getUserInfo();
    this.userInput = {...this.userInput, ...userInfo };
    this.route.queryParams.subscribe(params => this.userInput.rank = params['rank'] || 0)
  }

  onSubmit() {
    this.collegePredictorService.trackUser(this.userInput.name, this.userInput.email, this.userInput.phone, {
      type: "college-prediction",
      rank: this.userInput.rank,
      category: this.userInput.category,
      seatPool: this.userInput.seatPool
    }).subscribe();
    this.storageService.setUserInfo({name: this.userInput.name, email: this.userInput.email, phone: this.userInput.phone});
    this.colleges$ = this.collegePredictorService.predict(this.userInput.rank, this.userInput.category, this.userInput.seatPool);
  }

  navToRankPredictor() {
    this.router.navigate(["rank-predictor"]);
  }
}

