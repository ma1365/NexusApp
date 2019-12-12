import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceRollsComponent } from './dice-roller/dice-rolls/dice-rolls.component';
import { DiceRollDetailsComponent } from './dice-roller/dice-roll-details/dice-roll-details.component';
import { ProjectEulerComponent } from './project-euler/project-euler/project-euler.component';
import { ProjectEulerDetailsComponent } from './project-euler/project-euler-details/project-euler-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceRollsComponent,
    DiceRollDetailsComponent,
    ProjectEulerComponent,
    ProjectEulerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
