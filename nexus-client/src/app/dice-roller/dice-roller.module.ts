import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiceRollsComponent } from './dice-rolls/dice-rolls.component';
import { DiceRollDetailsComponent } from './dice-roll-details/dice-roll-details.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule
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
