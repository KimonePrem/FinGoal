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
      goal.contributionPercentage = Number.parseFloat(childSnapshot.child('contribution-percentage').val());

      if (childSnapshot.child('due-date').exists()) {
        const goalDateString = childSnapshot.child('due-date').val();
        goal.setGoalDate(goalDateString);
      }

      if (childSnapshot.child('goal-amount').exists()) {
        goal.goalAmount = Number.parseFloat(childSnapshot.child('goal-amount').val());
      }

      goalsList.push(goal);
    });

    // ToDo: create separate file to store raw string for db
    // ToDo: create screen for no entries found

    return goalsList;
  }

}
