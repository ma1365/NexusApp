import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProjectEulerComponent } from './project-euler/project-euler/project-euler.component';
import { ProjectEulerDetailsComponent } from './project-euler/project-euler-details/project-euler-details.component';

import { DiceRollerModule} from './dice-roller/dice-roller.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    ProjectEulerComponent,
    ProjectEulerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    DiceRollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
