import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddGoalModalComponent} from './add-goal-modal.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

describe('AddGoalModalComponent', () => {
  let component: AddGoalModalComponent;
  let fixture: ComponentFixture<AddGoalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddGoalModalComponent],
      imports: [AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule],
      providers: [NgbActiveModal]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGoalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
