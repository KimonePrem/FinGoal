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

  @Input() public goal;

  constructor(public activeModal: NgbActiveModal,
              public goalsService: GoalsService) {
  }

  ngOnInit(): void {
  }

  getGoalDateInInputFormat(): string {
    if (this.goal.isGoalDueDatePresent()) {
      console.log(this.goal);
      return Goal.convertDateTypeToDateInputString(this.goal.goalDate);
    } else {
      return '';
    }
  }

  submitGoalUpdate(name: string, contribution: string, date: string, amount: string) {

  }

  // ToDo: fix format of input boxes: create spaces
  // ToDo: backend functionality: take into account empty dates and amounts
}
