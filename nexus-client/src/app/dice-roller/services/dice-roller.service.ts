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

  diceRollerApiUrl = 'http://localhost/DiceRollerAPI/api/DiceRoller/die';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public initialComponentLoad$: Observable<DiceRollComponent>

  constructor(private httpClient: HttpClient ) { }

  getDice(): Observable<DiceRollComponent[]> {
    return this.httpClient.get<DiceRollComponent[]>(this.diceRollerApiUrl)
    .pipe(
      catchError(this.handleError<DiceRollComponent[]>('getRolls', []))
    );
  }

  getSelectedDieRolls(die: DiceRollComponent): Observable<DiceRollComponent> {
    let url = this.diceRollerApiUrl + '/diceRoll';
    return this.handleApiPost(url, 'getSelectedDieRolls', die);
  }

  getSelectedDieInitialComponent(die: DiceRollComponent) {
    let url = this.diceRollerApiUrl + '/diceRoll';
    this.initialComponentLoad$ = this.handleApiPost(url, 'getSelectedDieInitialComponent', die);
    return this.initialComponentLoad$;
  }

  handleApiGet(url: string, actionName: string){
    return this.httpClient.get<DiceRollComponent>(url, this.httpOptions)
    .pipe(
      //This may be missing something after the operation
      catchError(this.handleError<DiceRollComponent>(actionName))
    );
  }

  handleApiPost(url: string, actionName: string, body: any){
    return this.httpClient.post<DiceRollComponent>(url, body, this.httpOptions)
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
