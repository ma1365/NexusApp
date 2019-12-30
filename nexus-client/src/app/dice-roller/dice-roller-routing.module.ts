import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiceRollsComponent } from './dice-rolls/dice-rolls.component';
import { DiceRollDetailsComponent } from './dice-roll-details/dice-roll-details.component';

const childRoutes: Routes = [
  { path: '', component: DiceRollsComponent },
  { path: ':selectedDie', component: DiceRollDetailsComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(childRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class DiceRollerRoutingModule { }
