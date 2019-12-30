import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

import { DiceRollComponent } from '../models/diceRollComponent';
import { DiceRollerService } from '../Services/dice-roller.service';
import { CommandComponent } from 'src/app/models/commandComponent';

@Component({
  selector: 'app-dice-roll-details',
  templateUrl: './dice-roll-details.component.html',
  styleUrls: ['./dice-roll-details.component.css']
})

export class DiceRollDetailsComponent implements OnInit {

    dieCount: number;
    die: DiceRollComponent;
    die$: Subject<DiceRollComponent>;

  constructor(
    private route: ActivatedRoute,
    private location: Location, // TODO: add back button
    private diceRollerService: DiceRollerService) { }

  @Input()
  queryParams: {
    selectedDie: DiceRollComponent
  };

  ngOnInit() {
    this.getRolls();
  }

  getRolls(): void {
    // const dieType = this.route.snapshot.paramMap.get('dieType') to get the param from url
    this.diceRollerService.initialComponentLoad$
      .subscribe(die => this.die = die);
  }

  onRollDie(value: DiceRollComponent, selectedCommand: CommandComponent) {
    // const dieType = this.route.snapshot.paramMap.get('dieType');
    value.SelectedCommand = selectedCommand;
    value.SelectedCommand.Payload.ExecutionData.RollCount = this.dieCount;
    value.SelectedCommand.Payload.ExecutionData.DieType = value.DieType;

    this.diceRollerService.getSelectedDieRolls(value)
      .subscribe(die => this.die = die);
  }

}
