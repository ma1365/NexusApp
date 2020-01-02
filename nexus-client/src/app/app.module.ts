import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProjectEulerComponent } from './project-euler/project-euler/project-euler.component';
import { ProjectEulerDetailsComponent } from './project-euler/project-euler-details/project-euler-details.component';

import { DiceRollerModule} from './dice-roller/dice-roller.module';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ProjectEulerComponent,
    ProjectEulerDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    DiceRollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
