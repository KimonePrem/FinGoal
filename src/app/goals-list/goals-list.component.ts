import {Component, OnInit} from '@angular/core';
import {GoalsService} from '../goals.service';
import {Goal} from './Goal';

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css']
})
export class GoalsListComponent implements OnInit {
  goalsList: Goal[];

  constructor(public goalsService: GoalsService) {
    goalsService.getGoals().then((value) => {
      this.goalsList = GoalsService.snapshotToArray(value);
    });
  }

  ngOnInit(): void {
  }

}
