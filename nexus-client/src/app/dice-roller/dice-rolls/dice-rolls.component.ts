import { Component, OnInit } from '@angular/core';
import { DiceRollComponent } from '../models/diceRollComponent';
import { DiceRollerService } from '../Services/dice-roller.service';

@Component({
  selector: 'app-dice-rolls',
  templateUrl: './dice-rolls.component.html',
  styleUrls: ['./dice-rolls.component.css']
})
export class DiceRollsComponent implements OnInit {

  dice: DiceRollComponent[];
  selectedDie: DiceRollComponent;

  constructor(private diceRollerService: DiceRollerService) { }

  ngOnInit() {
    this.getRolls();
  }

  getRolls(): void {
    this.diceRollerService.getDice()
      .subscribe(dice => this.dice = dice);
  }

  onSelect(die: DiceRollComponent) {
    this.diceRollerService.getSelectedDieInitialComponent(die)
    .subscribe(dieComponent => this.selectedDie = dieComponent);
  }
}

// public ngOnInit(): void {
//   this.route.params.pipe(
//     tap(params => this.currentQueueService.loadById(params.id)),
//     takeUntil(this.unsubscribe)
//   ).subscribe();

//   this.error$ = this.currentQueueService.hasError$;
//   this.queue$ = this.currentQueueService.currentQueue$;
// }
