import { CommandComponent } from '../../models/commandComponent';

export class DiceRollComponent {
    RollValues: number[];
    DieType: string;
    Commands: CommandComponent[];
    SelectedCommand: CommandComponent;
}
