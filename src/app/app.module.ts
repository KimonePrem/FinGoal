import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Cash, Person, Plus } from 'ng-bootstrap-icons/icons';
import { GoalsOptionsComponent } from './components/goals-options/goals-options.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { GoalsListComponent } from './components/goals-list/goals-list.component';

const icons = {
  Cash,
  Person,
  Plus
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GoalsOptionsComponent,
    GoalsListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BootstrapIconsModule.pick(icons),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  exports: [BootstrapIconsModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
