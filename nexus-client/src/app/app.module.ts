import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceRollsComponent } from './dice-roller/dice-rolls/dice-rolls.component';
import { DiceRollDetailsComponent } from './dice-roller/dice-roll-details/dice-roll-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceRollsComponent,
    DiceRollDetailsComponent
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
