import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GoalsOptionsComponent} from './goals-options.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

describe('GoalsOptionsComponent', () => {
  let component: GoalsOptionsComponent;
  let fixture: ComponentFixture<GoalsOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalsOptionsComponent],
      imports: [AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
