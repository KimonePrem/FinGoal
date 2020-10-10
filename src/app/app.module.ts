import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Cash, Person } from 'ng-bootstrap-icons/icons';

const icons = {
  Cash,
  Person
};

@NgModule({
  declarations: [
    AppComponent,
    GoalsListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BootstrapIconsModule.pick(icons)
  ],
  exports: [BootstrapIconsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
