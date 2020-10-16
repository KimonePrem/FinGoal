import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Goal} from '../entity/Goal';


@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private firebase: AngularFireDatabase) {
  }

  getGoals() {
    return this.firebase.database.ref('/goals').once('value', function(snapshot) {
    });
  }

  static snapshotToArray(snapshot: firebase.database.DataSnapshot): Goal[] {
    let goalsList: Goal[] = new Array<Goal>();

    snapshot.forEach(function(childSnapshot) {
      let goal: Goal = new Goal();
      goal.name = childSnapshot.key;
      goal.contribution_percentage = Number.parseFloat(childSnapshot.child('contribution_percentage').val());

      if (childSnapshot.child('due_date').exists()) {
        goal.due_date = childSnapshot.child('due_date').val();
      }

      if (childSnapshot.child('goal_amount').exists()) {
        goal.goal_amount = Number.parseFloat(childSnapshot.child('goal_amount').val());
      }

      goalsList.push(goal);
    });

    return goalsList;
  }

}
