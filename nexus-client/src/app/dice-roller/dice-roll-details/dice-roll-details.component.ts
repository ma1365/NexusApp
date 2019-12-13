import { Component, OnInit  } from '@angular/core';
import { DiceRollComponent } from '../models/diceRollComponent';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DiceRollerService } from '../Services/dice-roller.service';

@Component({
  selector: 'app-dice-roll-details',
  templateUrl: './dice-roll-details.component.html',
  styleUrls: ['./dice-roll-details.component.css']
})



export class DiceRollDetailsComponent implements OnInit {

    dieCount: number;
    die: DiceRollComponent;

  constructor(
    private route: ActivatedRoute,
    private location: Location, //TODO: add back button
    private diceRollerService: DiceRollerService) { }

  ngOnInit() {
    this.getRolls();
  }

  getRolls(): void {
    let dieType = this.route.snapshot.paramMap.get('dieType');
    this.diceRollerService.getSelectedDieRolls(dieType.toString())
      .subscribe(die => this.die = die);
  }

  onRollDie(value: DiceRollComponent){
    //TODO: Update Command that will be passed to API Call
    value.RollValues[0] = 1;
    value.RollValues[1] = 2;
    this.die = value;
  }

}
