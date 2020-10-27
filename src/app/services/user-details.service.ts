import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private firebase: AngularFireDatabase) {
  }

  getTotalSavings() {
    return this.firebase.database.ref('/total-savings').once('value', function(snapshot) {
    });
  }

  getUsername() {
    return this.firebase.database.ref('/username').once('value', function(snapshot) {
    });
  }

  setUsername(newUsername: string) {
    return this.firebase.database.ref('/username').set(newUsername);
  }

  setTotalSavings(newSavings: number) {
    return this.firebase.database.ref('/total-savings').set(newSavings);
  }
}
