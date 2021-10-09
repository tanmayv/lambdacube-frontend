import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegePredictorComponent } from './college-predictor/college-predictor.component';
import { HomeComponent } from './home/home.component';
import { RankPredictorComponent } from './rank-predictor/rank-predictor.component';

const routes: Routes = [{
  path: "rank-predictor",
  component: RankPredictorComponent
},{
  path: "home",
  component: HomeComponent
},
{ path: '',   redirectTo: '/home', pathMatch: 'full' },
{
  path: "college-predictor",
  component: CollegePredictorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
