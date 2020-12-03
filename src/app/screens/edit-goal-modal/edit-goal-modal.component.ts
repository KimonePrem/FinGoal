import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GoalsService} from '../../services/goals.service';
import {Goal} from '../../entity/Goal';

@Component({
  selector: 'app-edit-goal-modal',
  templateUrl: './edit-goal-modal.component.html',
  styleUrls: ['./edit-goal-modal.component.css']
})
export class EditGoalModalComponent implements OnInit {

  @Input() public oldGoal: Goal;

  constructor(public activeModal: NgbActiveModal,
              public goalsService: GoalsService) {
  }

  ngOnInit(): void {
    console.log(this.oldGoal);
  }

  getGoalDateInInputFormat(): string {
    if (this.oldGoal.isGoalDueDatePresent()) {
      console.log(this.oldGoal);
      return Goal.convertDateTypeToDateInputString(this.oldGoal.goalDate);
    } else {
      return '';
    }
  }

  submitGoalUpdate(name: string, contribution: string, dueDate: string, amount: string) {
    if (dueDate != null || dueDate != '') {
      dueDate = Goal.convertDateInputStringToFirebaseDateString(dueDate);
    }

    this.goalsService.editGoal(name, contribution, dueDate, amount, this.oldGoal.name);
  }

  // ToDo: fix format of input boxes: create spaces
  // ToDo: backend functionality: take into account empty dates and amounts
  // ToDo: check test coverage for all files and fill in the gaps
}
