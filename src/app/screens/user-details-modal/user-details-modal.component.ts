import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UserDetailsService} from '../../services/user-details.service';

@Component({
  selector: 'app-user-details-modal',
  templateUrl: './user-details-modal.component.html',
  styleUrls: ['./user-details-modal.component.css']
})
export class UserDetailsModalComponent implements OnInit {

  username: string;
  totalSavings: number;

  constructor(public activeModal: NgbActiveModal,
              private userDetailsService: UserDetailsService) {
    this.fetchUserDetails();
  }

  ngOnInit(): void {
  }

  private fetchUserDetails() {
    this.userDetailsService.getUsername().then((value) => {
      this.username = value.val();
    });

    this.userDetailsService.getTotalSavings().then((value) => {
      this.totalSavings = Number.parseFloat(value.val());
    });
  }

  submitUserDetailsEdit(username: string, savings: string) {
    this.username = username;
    this.totalSavings = Number.parseFloat(savings);

    this.userDetailsService.setUsername(this.username);
    this.userDetailsService.setTotalSavings(this.totalSavings);
  }
}
