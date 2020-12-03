import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGoalModalComponent } from './edit-goal-modal.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Goal} from '../../entity/Goal';

describe('EditGoalModalComponent', () => {
  let component: EditGoalModalComponent;
  let fixture: ComponentFixture<EditGoalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGoalModalComponent ],
      imports: [AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGoalModalComponent);

    component = fixture.componentInstance;
    component.oldGoal = new Goal();
    component.oldGoal.name = "Name";
    component.oldGoal.contributionPercentage = 20;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
