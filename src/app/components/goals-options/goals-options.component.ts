import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddGoalModalComponent} from '../add-goal-modal/add-goal-modal.component';

@Component({
  selector: 'app-goals-options',
  templateUrl: './goals-options.component.html',
  styleUrls: ['./goals-options.component.css']
})
export class GoalsOptionsComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  openAddGoalModal() {
    this.modalService.open(AddGoalModalComponent, {scrollable: true});
  }
}
