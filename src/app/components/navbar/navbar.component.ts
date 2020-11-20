import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserDetailsModalComponent} from '../../screens/user-details-modal/user-details-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  openUserDetailsModal() {
    this.modalService.open(UserDetailsModalComponent, {size: 'lg', scrollable: true});
  }
}
