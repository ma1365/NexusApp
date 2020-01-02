import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
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
    navigationSubscription;

  constructor(
    private route: ActivatedRoute,
    private location: Location, // TODO: add back button
    private diceRollerService: DiceRollerService,
    private router: Router) {
      // subscribe to the router events - storing the subscription so
      // we can unsubscribe later.
      this.navigationSubscription = this.router.events.subscribe((e: any) => {
        // If it is a NavigationEnd event re-initalise the component
        if (e instanceof NavigationEnd) {
          this.initialiseInvites();
        }
      });
    }

  @Input()
  queryParams: {
    selectedDie: DiceRollComponent
  };

  ngOnInit() {
    this.getRolls();
  }

  initialiseInvites() {
    // Set default values and re-fetch any data you need.
    this.dieCount = null;
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
