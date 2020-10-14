import {Component, OnInit} from '@angular/core';
import {GoalsService} from '../../goals.service';
import {Goal} from '../../entity/Goal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  goalsList: Goal[];

  constructor(public goalsService: GoalsService) {
    goalsService.getGoals().then((value) => {
      this.goalsList = GoalsService.snapshotToArray(value);
    });
  }

  ngOnInit(): void {
  }

}
