import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiceRollsComponent } from './dice-roller/dice-rolls/dice-rolls.component';


const routes: Routes = [
  { path: 'dice', component: DiceRollsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
