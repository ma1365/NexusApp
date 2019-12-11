import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { DiceRollComponent } from '../models/diceRollComponent';

@Component({
  selector: 'app-dice-roll-details',
  templateUrl: './dice-roll-details.component.html',
  styleUrls: ['./dice-roll-details.component.css']
})



export class DiceRollDetailsComponent implements OnInit {

  @Input() die: DiceRollComponent;
  @Output() rollDiceEvent = new EventEmitter();
  dieCount: number;

  constructor() { }

  ngOnInit() {
  }

  onRollDie(value: DiceRollComponent){
    //TODO: Update Command that will be passed to API Call
    value.RollValues[0] = 1;
    value.RollValues[1] = 2;
    this.rollDiceEvent.emit(value);
  }

}
