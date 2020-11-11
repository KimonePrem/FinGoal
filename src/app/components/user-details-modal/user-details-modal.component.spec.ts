import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserDetailsModalComponent} from './user-details-modal.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

describe('UserDetailsModalComponent', () => {
  let component: UserDetailsModalComponent;
  let fixture: ComponentFixture<UserDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsModalComponent],
      imports: [AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        NgbModule],
      providers: [NgbActiveModal]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
