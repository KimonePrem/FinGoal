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

  editGoal(name: string, contribution: string, dueDate: string, amount: string, oldGoalName: string) {
    const oldGoalDeleted = this.deleteGoal(oldGoalName);
    const newGoalAdded = this.addGoal(name, contribution, dueDate, amount);

    return newGoalAdded && oldGoalDeleted;
  }

  addGoal(goalName: string, contribution: string, dueDate?: string, goalAmount?: string) {
    try {
      let goalObject = new Goal();
      goalObject.name = goalName;
      goalObject.goalDate = Goal.convertFirebaseStringDateToDateType(dueDate);
      goalObject.goalAmount = Number.parseFloat(goalAmount);
      goalObject.contributionPercentage = Number.parseFloat(contribution);

      let newGoal = {};
      newGoal[ServiceData.firebaseTags.contributionPercentage] = contribution;
      if (goalObject.isGoalDueDatePresent()) {
        newGoal[ServiceData.firebaseTags.dueDate] = dueDate;
      }
      if (goalObject.isGoalAmountPresent()) {
        newGoal[ServiceData.firebaseTags.goalAmount] = goalAmount;
      }

      this.firebase.database.ref('/goals/' + goalName).set(newGoal).then(function() {
        return true;
      })
        .catch(function(error) {
          console.log('Failed to add goal ' + goalName + ': ' + error);
          return false;
        });

    } catch (exception) {
      console.log('failed: ' + exception);
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
      } else {
        goal.goalDate = null;
      }

      if (childSnapshot.child(ServiceData.firebaseTags.goalAmount).exists()) {
        goal.goalAmount = Number.parseFloat(childSnapshot.child(ServiceData.firebaseTags.goalAmount).val());
      } else {
        goal.goalAmount = null;
      }

      goalsList.push(goal);
    });

    return goalsList;
  }

  private deleteGoal(goalName: string) {
    this.firebase.database.ref('/goals/' + goalName).remove().then(function() {
      return true;
    })
      .catch(function(error) {
        console.log('Failed to delete goal ' + goalName + ': ' + error);
        return false;
      });
  }
}
