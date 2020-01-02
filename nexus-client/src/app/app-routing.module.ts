import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectEulerComponent } from './project-euler/project-euler/project-euler.component';
import { DiceRollsComponent } from './dice-roller/dice-rolls/dice-rolls.component';
import { DiceRollDetailsComponent } from './dice-roller/dice-roll-details/dice-roll-details.component';

const routes: Routes = [
  { path: 'project-euler', component: ProjectEulerComponent },
  { path: 'dice', component: DiceRollsComponent, runGuardsAndResolvers: 'always',
    // loadChildren: () => import('./dice-roller/dice-roller.module').then(m => m.DiceRollerModule)
    children: [
      // { path: '', component: DiceRollsComponent },
      { path: ':selectedDie', component: DiceRollDetailsComponent, runGuardsAndResolvers: 'always' }
    ]
  },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
