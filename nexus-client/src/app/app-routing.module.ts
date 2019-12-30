import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectEulerComponent } from './project-euler/project-euler/project-euler.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'project-euler', component: ProjectEulerComponent },
  { path: 'dice',
    loadChildren: () => import('./dice-roller/dice-roller.module').then(m => m.DiceRollerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
