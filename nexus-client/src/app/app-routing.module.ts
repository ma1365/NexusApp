import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiceRollsComponent } from './dice-roller/dice-rolls/dice-rolls.component';
import { ProjectEulerComponent } from './project-euler/project-euler/project-euler.component';


const routes: Routes = [
  { path: 'dice', component: DiceRollsComponent },
  { path: 'project-euler', component: ProjectEulerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
