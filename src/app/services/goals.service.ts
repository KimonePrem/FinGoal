import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Goal} from '../entity/Goal';
import {ServiceData} from './ServiceData';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private firebase: AngularFireDatabase) {
  }

  getGoals() {
    return this.firebase.database.ref('/goals').once('value', function() {
    });
  }

  static snapshotToArray(snapshot: firebase.database.DataSnapshot): Goal[] {
    let goalsList: Goal[] = new Array<Goal>();

    snapshot.forEach(function(childSnapshot) {
      let goal: Goal = new Goal();
      goal.name = childSnapshot.key;
      goal.contributionPercentage = Number.parseFloat(childSnapshot.child(ServiceData.firebaseTags.contributionPercentage).val());

      if (childSnapshot.child(ServiceData.firebaseTags.dueDate).exists()) {
        const goalDateString = childSnapshot.child(ServiceData.firebaseTags.dueDate).val();
        goal.setGoalDate(goalDateString);
      }

      if (childSnapshot.child(ServiceData.firebaseTags.goalAmount).exists()) {
        goal.goalAmount = Number.parseFloat(childSnapshot.child(ServiceData.firebaseTags.goalAmount).val());
      }

      goalsList.push(goal);
    });

    return goalsList;
  }

}
