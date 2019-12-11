import { Component, OnInit } from '@angular/core';
import { DiceRollComponent } from '../models/diceRollComponent';
import { DiceRollerService } from '../Services/dice-roller.service';
@Component({
  selector: 'app-dice-rolls',
  templateUrl: './dice-rolls.component.html',
  styleUrls: ['./dice-rolls.component.css']
})
export class DiceRollsComponent implements OnInit {

  rolls: DiceRollComponent[];
  selectedDie: DiceRollComponent;
  dieCount: number;

  constructor(private diceRollerService: DiceRollerService) { }
  
  ngOnInit() {
    //Temp for testing initial set of roll should be empty
    this.getRolls();
  }

  getRolls(): void {
    this.diceRollerService.getRolls()
      .subscribe(diceRolls => this.rolls = diceRolls);
  }

  onSelect(die: DiceRollComponent): void {
    this.selectedDie = die;
  }

  updateDetails(die: DiceRollComponent): void {
    this.selectedDie = die;

    this.selectedDie.RollValues[0] = 1;
    this.selectedDie.RollValues[1] = 2;

    this.selectedDie.Commands[0].Payload.ExecutiontData.RollCount = this.dieCount;
  }

}
