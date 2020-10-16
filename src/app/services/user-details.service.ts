import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private firebase: AngularFireDatabase) { }

  getContributionDate(){
    return this.firebase.database.ref('/contribution-date').once('value', function(snapshot) {
    });
  }

  getMonthlyContribution(){
    return this.firebase.database.ref('/monthly-contribution').once('value', function(snapshot) {
    });
  }

  getTotalSavings(){
    return this.firebase.database.ref('/total-savings').once('value', function(snapshot) {
    });
  }

  getUsername(){
    return this.firebase.database.ref('/username').once('value', function(snapshot) {
    });
  }
}
