import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GoalsService} from '../../services/goals.service';

@Component({
  selector: 'app-confirm-delete-modal',
  templateUrl: './confirm-delete-modal.component.html',
  styleUrls: ['./confirm-delete-modal.component.css']
})
export class ConfirmDeleteModalComponent implements OnInit {

  @Input() public goalName: string;

  constructor(public activeModal: NgbActiveModal,
              public goalsService: GoalsService) {
  }

  ngOnInit(): void {
  }

  deleteGoal() {
    this.goalsService.deleteGoal(this.goalName);
  }
}
