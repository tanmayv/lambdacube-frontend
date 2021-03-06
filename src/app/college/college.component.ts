import { Component, OnInit, Input } from '@angular/core';
import { CollegeInfo } from './college-info';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {

  @Input() college!: CollegeInfo;
  ngOnInit(): void {
    this.college.branches = this.college.branches.sort((a, b) => a.closingRank - b.closingRank);
  }
}
