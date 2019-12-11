import { DiceRollComponent } from '../models/diceRollComponent';


export const DICEROLLS: DiceRollComponent[]  = [
    {
        RollValues : [ 3,4 ],
        DieType: 'D4',
        Commands:[
            {
                IsEnabled: true,
                IsVisible: true,
                CommandName: 'Roll Dice',
                Payload: {
                    ExecutiontData: {
                        RollCount: 2
                    },
                    ReturnedData: null
                }
            }
        ]
    },
    {
        RollValues : [ 3,5 ],
        DieType: 'D6',
        Commands:[
            {
                IsEnabled: true,
                IsVisible: true,
                CommandName: 'Roll Dice',
                Payload: {
                    ExecutiontData: {
                        RollCount: 2
                    },
                    ReturnedData: null
                }
            }
        ]
    },
    {
        RollValues : [ 5,7 ],
        DieType: 'D8',
        Commands:[
            {
                IsEnabled: true,
                IsVisible: true,
                CommandName: 'Roll Dice',
                Payload: {
                    ExecutiontData: {
                        RollCount: 2
                    },
                    ReturnedData: null
                }
            }
        ]
    },
    {
        RollValues : [ 7,9 ],
        DieType: 'D10',
        Commands:[
            {
                IsEnabled: true,
                IsVisible: true,
                CommandName: 'Roll Dice',
                Payload: {
                    ExecutiontData: {
                        RollCount: 2
                    },
                    ReturnedData: null
                }
            }
        ]
    },
    {
        RollValues : [ 9,11 ],
        DieType: 'D12',
        Commands:[
            {
                IsEnabled: true,
                IsVisible: true,
                CommandName: 'Roll Dice',
                Payload: {
                    ExecutiontData: {
                        RollCount: 2
                    },
                    ReturnedData: null
                }
            }
        ]
    },
    {
        RollValues : [ 11,19 ],
        DieType: 'D20',
        Commands:[
            {
                IsEnabled: true,
                IsVisible: true,
                CommandName: 'Roll Dice',
                Payload: {
                    ExecutiontData: {
                        RollCount: 2
                    },
                    ReturnedData: null
                }
            }
        ]
    },
    {
        RollValues : [ 3,99 ],
        DieType: 'D100',
        Commands:[
            {
                IsEnabled: true,
                IsVisible: true,
                CommandName: 'Roll Dice',
                Payload: {
                    ExecutiontData: {
                        RollCount: 2
                    },
                    ReturnedData: null
                }
            }
        ]
    }
]