import {Component, OnInit} from '@angular/core';
import {Goal} from '../../entity/Goal';
import {GoalsService} from '../../services/goals.service';
import {UserDetailsService} from '../../services/user-details.service';

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css']
})
export class GoalsListComponent implements OnInit {
  goalsList: Goal[];
  totalSavings: number;

  constructor(private goalsService: GoalsService,
              private userDetailsService: UserDetailsService) {
    this.fetchGoalsList();
    this.fetchUserDetails();
  }

  ngOnInit(): void {
  }

  private fetchGoalsList() {
    this.goalsService.getGoals().then((value) => {
      this.goalsList = GoalsService.snapshotToArray(value);
      console.log(this.goalsList);
    });
  }

  private fetchUserDetails() {
    this.userDetailsService.getTotalSavings().then((value) => {
      this.totalSavings = Number.parseFloat(value.val());
    });
  }

  calculateGoalProgress(goalAmount: number, contribution: number, totalSavings: number): number {
    let progressAmount = 0;

    if (contribution == 0) {
      return 0;
    } else {
      const totalSavedForGoal = this.calculateAmountSaved(contribution, totalSavings);
      progressAmount = (totalSavedForGoal / goalAmount) * 100;
      return progressAmount;
    }
  }

  private calculateAmountSaved(contribution: number, totalSavings: number): number {
    return contribution == 0 ? 0 : (contribution / 100) * totalSavings;
  }
}
