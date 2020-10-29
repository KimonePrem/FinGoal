import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {ServiceData} from './ServiceData';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private firebase: AngularFireDatabase) {
  }

  getTotalSavings() {
    return this.firebase.database.ref(ServiceData.firebaseTags.totalSavings).once('value', function(snapshot) {
    });
  }

  setTotalSavings(newSavings: number) {
    try {
      this.firebase.database.ref(ServiceData.firebaseTags.totalSavings).set(newSavings);
      return true;
    } catch (exception) {
      return false;
    }
  }

  getUsername() {
    return this.firebase.database.ref(ServiceData.firebaseTags.username).once('value', function(snapshot) {
    });
  }

  setUsername(newUsername: string) {
    try {
      this.firebase.database.ref(ServiceData.firebaseTags.username).set(newUsername);
      return true;
    } catch (exception) {
      return false;
    }
  }

}
