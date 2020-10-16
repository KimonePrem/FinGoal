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
  username: string;
  totalSavings: number;
  monthlyContribution: number;
  contributionDate: number;

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
    });
  }

  private fetchUserDetails() {
    this.userDetailsService.getUsername().then((value) => {
      this.username = value.val();
    });

    this.userDetailsService.getTotalSavings().then((value) => {
      this.totalSavings = Number.parseFloat(value.val());
    });

    this.userDetailsService.getMonthlyContribution().then((value) => {
      this.monthlyContribution = Number.parseFloat(value.val());
    });

    this.userDetailsService.getContributionDate().then((value) => {
      this.contributionDate = Number.parseFloat(value.val());
    });
  }

  calculateGoalProgress(goalAmount: number, contribution: number): number {
    let progressAmount = 0;

    if (contribution == 0) {
      return 0;
    } else {
      const totalSavedForGoal = (contribution / 100) * this.totalSavings;
      progressAmount = (totalSavedForGoal / goalAmount) * 100;
      return progressAmount;
    }

  }
}
