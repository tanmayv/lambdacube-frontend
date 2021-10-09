import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CollegeInfo } from '../college/college-info';
import { Observable } from 'rxjs';
import { RankInfo } from '../rank-predictor/rank-info';

@Injectable({
  providedIn: 'root'
})
export class CollegePredictorService {
  constructor(private http: HttpClient) { }
  
  trackUser(name: string, email: string, phone: string, extras: any) {
    return this.http.post(`${environment.apiUrl}/v1/userActivity`, {name, email, phone, extras});
  }
  
  predict(rank: number, category: string, seatPool: string): Observable<CollegeInfo[]> {
    return this.http.get<CollegeInfo[]>(`${environment.apiUrl}/v1/college?rank=${rank}&category=${category}&seatPool=${seatPool}&count=10`);
  }
   
  predictRank(marks: number, category: string = "CRL"): Observable<RankInfo> {
    return this.http.get<RankInfo>(`${environment.apiUrl}/v1/rank?marks=${marks}&category=${category}`);
  }
}
