import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GoalsListComponent} from './goals-list.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

describe('GoalsListComponent', () => {
  let component: GoalsListComponent;
  let fixture: ComponentFixture<GoalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalsListComponent],
      imports: [AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the progress of a goal', () => {
    let progressPercentage = component.calculateGoalProgress(10000, 12, 50000);
    expect(progressPercentage).toEqual(60);
  });

  it('should calculate the progress of a goal and return zero if contribution is zero', () => {
    let progressPercentage = component.calculateGoalProgress(10000, 0, 0);
    expect(progressPercentage).toEqual(0);
  });

  // ToDo: Display amount saved for savings with and without goal amounts
  // ToDo: Show goal amount at the end of the progress bar
  // ToDo: show time left until due date for goal
  // ToDo: write tests for components

});
