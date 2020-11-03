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

  addGoal(goalName: string, contribution: string, dueDate?: string, goalAmount?: string){
    try {
      const newGoal = {};
      // ToDo: complete this code - add entry with custom id
      this.firebase.database.ref('/goals').set(newGoal);
      return true;
    } catch (exception) {
      return false;
    }
  }

  static snapshotToArray(snapshot: firebase.database.DataSnapshot): Goal[] {
    let goalsList: Goal[] = new Array<Goal>();

    snapshot.forEach(function(childSnapshot) {
      let goal: Goal = new Goal();
      goal.name = childSnapshot.key;
      goal.contributionPercentage = Number.parseFloat(childSnapshot.child(ServiceData.firebaseTags.contributionPercentage).val());

      if (childSnapshot.child(ServiceData.firebaseTags.dueDate).exists()) {
        const goalDateString = childSnapshot.child(ServiceData.firebaseTags.dueDate).val();
        goal.goalDate = Goal.convertFirebaseStringDateToDateType(goalDateString);
      }

      if (childSnapshot.child(ServiceData.firebaseTags.goalAmount).exists()) {
        goal.goalAmount = Number.parseFloat(childSnapshot.child(ServiceData.firebaseTags.goalAmount).val());
      }

      goalsList.push(goal);
    });

    return goalsList;
  }

}
