import {Component, OnInit} from '@angular/core';
import {Goal} from '../../entity/Goal';
import {GoalsService} from '../../goals.service';

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css']
})
export class GoalsListComponent implements OnInit {
  goalsList: Goal[];

  constructor(public goalsService: GoalsService) {
    this.fetchGoalsList();
  }

  ngOnInit(): void {
  }

  private fetchGoalsList() {
    this.goalsService.getGoals().then((value) => {
      this.goalsList = GoalsService.snapshotToArray(value);
      console.log(this.goalsList);
    });
  }
}
