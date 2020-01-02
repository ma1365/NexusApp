import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DiceRollsComponent } from './dice-rolls/dice-rolls.component';
import { DiceRollDetailsComponent } from './dice-roll-details/dice-roll-details.component';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule
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
