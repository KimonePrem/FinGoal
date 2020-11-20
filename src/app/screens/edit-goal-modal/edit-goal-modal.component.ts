import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GoalsService} from '../../services/goals.service';

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

}
