import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Cash, Person, Plus } from 'ng-bootstrap-icons/icons';
import { GoalsOptionsComponent } from './goals-list/goals-options/goals-options.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

const icons = {
  Cash,
  Person,
  Plus
};

// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    GoalsListComponent,
    NavbarComponent,
    GoalsOptionsComponent
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

// @ts-ignore
export class AppModule {

}
// @ts-ignore
