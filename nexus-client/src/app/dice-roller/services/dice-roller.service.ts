import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { DICEROLLS } from '../Mocks/DiceRolls';
import { DiceRollComponent } from '..//models/diceRollComponent';

@Injectable({
  providedIn: 'root'
})
export class DiceRollerService {
  
  diceRollerApiUrl = 'http://localhost:52444/api/DiceRoller/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient ) { }

  getRolls(): Observable<DiceRollComponent[]> {
    return this.httpClient.get<DiceRollComponent[]>(this.diceRollerApiUrl, this.httpOptions)
    .pipe(
      catchError(this.handleError<DiceRollComponent[]>('getRolls', []))
    );
  }

  getSelectedDieRolls(dieType: string, rollCount: number): Observable<DiceRollComponent> {
    let url = this.diceRollerApiUrl + dieType + '?rollCount=' + rollCount;
    return this.handleApiCall(url, 'getSelectedDieRolls');  
  }

  getSelectedDieInitialComponent(dieType: string): Observable<DiceRollComponent> {
    let url = this.diceRollerApiUrl + dieType;
    return this.handleApiCall(url, 'getSelectedDieInitialComponent');  
  }

  handleApiCall(url: string, actionName: string){
    return this.httpClient.get<DiceRollComponent>(url, this.httpOptions)
    .pipe(
      //This may be missing something after the operation
      catchError(this.handleError<DiceRollComponent>(actionName))
    );
  }
  
  handleError<T>(operation = 'operation', result?: T){
    return (err: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(err); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${err.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
