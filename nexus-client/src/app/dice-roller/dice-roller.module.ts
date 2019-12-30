import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DiceRollsComponent } from './dice-rolls/dice-rolls.component';
import { DiceRollDetailsComponent } from './dice-roll-details/dice-roll-details.component';
import { DiceRollerRoutingModule } from '../dice-roller/dice-roller-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    DiceRollerRoutingModule,
    FormsModule
  ],
  declarations: [
    DiceRollsComponent,
    DiceRollDetailsComponent
  ],
  exports: [
    DiceRollsComponent,
    DiceRollDetailsComponent
  ]
})

export class DiceRollerModule { }
