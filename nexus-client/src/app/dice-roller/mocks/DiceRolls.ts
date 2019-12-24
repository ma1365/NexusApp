import { DiceRollComponent } from '../models/diceRollComponent';


export const DICEROLLS: DiceRollComponent[]  = [
    {
        RollValues : [ 3, 4 ],
        DieType: 'D4',
        SelectedCommand: null,
        Commands: [
            {
                IsEnabled: true,
                IsVisible: true,
                CommandName: 'Roll Dice',
                Payload: {
                    ExecutionData: {
                        RollCount: 2
                    },
                    ReturnedData: null
                }
            }
        ]
    },
    {
        RollValues : [ 3, 5 ],
        DieType: 'D6',
        SelectedCommand: null,
        Commands: [
            {
                IsEnabled: true,
                IsVisible: true,
                CommandName: 'Roll Dice',
                Payload: {
                    ExecutionData: {
                        RollCount: 2
                    },
                    ReturnedData: null
                }
            }
        ]
    },
    {
        RollValues : [ 5, 7 ],
        DieType: 'D8',
        SelectedCommand: null,
        Commands: [
            {
                IsEnabled: true,
                IsVisible: true,
                CommandName: 'Roll Dice',
                Payload: {
                    ExecutionData: {
                        RollCount: 2
                    },
                    ReturnedData: null
                }
            }
        ]
    },
    {
        RollValues : [ 7, 9 ],
        DieType: 'D10',
        SelectedCommand: null,
        Commands: [
            {
                IsEnabled: true,
                IsVisible: true,
                CommandName: 'Roll Dice',
                Payload: {
                    ExecutionData: {
                        RollCount: 2
                    },
                    ReturnedData: null
                }
            }
        ]
    },
    {
        RollValues : [ 9, 11 ],
        DieType: 'D12',
        SelectedCommand: null,
        Commands: [
            {
                IsEnabled: true,
                IsVisible: true,
                CommandName: 'Roll Dice',
                Payload: {
                    ExecutionData: {
                        RollCount: 2
                    },
                    ReturnedData: null
                }
            }
        ]
    },
    {
        RollValues : [ 11, 19 ],
        DieType: 'D20',
        SelectedCommand: null,
        Commands: [
            {
                IsEnabled: true,
                IsVisible: true,
                CommandName: 'Roll Dice',
                Payload: {
                    ExecutionData: {
                        RollCount: 2
                    },
                    ReturnedData: null
                }
            }
        ]
    },
    {
        RollValues : [ 3, 99 ],
        DieType: 'D100',
        SelectedCommand: null,
        Commands: [
            {
                IsEnabled: true,
                IsVisible: true,
                CommandName: 'Roll Dice',
                Payload: {
                    ExecutionData: {
                        RollCount: 2
                    },
                    ReturnedData: null
                }
            }
        ]
    }
];
