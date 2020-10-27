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
    return this.firebase.database.ref(ServiceData.firebaseTags.totalSavings).set(newSavings);
  }

  getUsername() {
    return this.firebase.database.ref(ServiceData.firebaseTags.username).once('value', function(snapshot) {
    });
  }

  setUsername(newUsername: string) {
    return this.firebase.database.ref(ServiceData.firebaseTags.username).set(newUsername);
  }

}
