import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DICEROLLS } from '../Mocks/DiceRolls';
import { DiceRollComponent } from '..//models/diceRollComponent';

@Injectable({
  providedIn: 'root'
})
export class DiceRollerService {
  
  constructor() { }

  getRolls(): Observable<DiceRollComponent[]> {
    return of(DICEROLLS);
  }
}
