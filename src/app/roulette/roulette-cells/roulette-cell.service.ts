import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouletteCellService {
  // roulette implementation 360/37 = 9.7 and Math.floor(deg/9.7) = roulette[index]
  public rouletteCells = [
    0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5,
    24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
  ];
  // cells implementation

  public cells = [
    { cell: 0, wins: [0], background: 'green', multiplier: 17 },
    { cell: 1, wins: [1], background: 'red', multiplier: 17 },
    { cell: 2, wins: [2], background: 'black', multiplier: 17 },
    { cell: 3, wins: [3], background: 'red', multiplier: 17 },
    { cell: 4, wins: [4], background: 'black', multiplier: 17 },
    { cell: 5, wins: [5], background: 'red', multiplier: 17 },
    { cell: 6, wins: [6], background: 'black', multiplier: 17 },
    { cell: 7, wins: [7], background: 'red', multiplier: 17 },
    { cell: 8, wins: [8], background: 'black', multiplier: 17 },
    { cell: 9, wins: [9], background: 'red', multiplier: 17 },
    { cell: 10, wins: [10], background: 'black', multiplier: 17 },
    { cell: 11, wins: [11], background: 'black', multiplier: 17 },
    { cell: 12, wins: [12], background: 'red', multiplier: 17 },
    { cell: 13, wins: [13], background: 'black', multiplier: 17 },
    { cell: 14, wins: [14], background: 'red', multiplier: 17 },
    { cell: 15, wins: [15], background: 'black', multiplier: 17 },
    { cell: 16, wins: [16], background: 'red', multiplier: 17 },
    { cell: 17, wins: [17], background: 'black', multiplier: 17 },
    { cell: 18, wins: [18], background: 'red', multiplier: 17 },
    { cell: 19, wins: [19], background: 'red', multiplier: 17 },
    { cell: 20, wins: [20], background: 'black', multiplier: 17 },
    { cell: 21, wins: [21], background: 'red', multiplier: 17 },
    { cell: 22, wins: [22], background: 'black', multiplier: 17 },
    { cell: 23, wins: [23], background: 'red', multiplier: 17 },
    { cell: 24, wins: [24], background: 'black', multiplier: 17 },
    { cell: 25, wins: [25], background: 'red', multiplier: 17 },
    { cell: 26, wins: [26], background: 'black', multiplier: 17 },
    { cell: 27, wins: [27], background: 'red', multiplier: 17 },
    { cell: 28, wins: [28], background: 'black', multiplier: 17 },
    { cell: 29, wins: [29], background: 'black', multiplier: 17 },
    { cell: 30, wins: [30], background: 'red', multiplier: 17 },
    { cell: 31, wins: [31], background: 'black', multiplier: 17 },
    { cell: 32, wins: [32], background: 'red', multiplier: 17 },
    { cell: 33, wins: [33], background: 'black', multiplier: 17 },
    { cell: 34, wins: [34], background: 'red', multiplier: 17 },
    { cell: 35, wins: [35], background: 'black', multiplier: 17 },
    { cell: 36, wins: [36], background: 'red', multiplier: 17 },
    {
      cell: '2 to 1 ',
      wins: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
      background: 'transparent',
      multiplier: 3,
    },
    {
      cell: '2 to 1',
      wins: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
      background: 'transparent',
      multiplier: 3,
    },
    {
      cell: '2 to 1  ',
      wins: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
      background: 'transparent',
      multiplier: 3,
    },
    {
      cell: '1st 12',
      wins: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      background: 'transparent bottom',
      multiplier: 3,
    },
    {
      cell: '2hd 12',
      wins: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      background: 'transparent bottom',
      multiplier: 3,
    },
    {
      cell: '3rd 12',
      wins: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
      background: 'transparent bottom',
      multiplier: 3,
    },
    {
      cell: '1 - 18',
      wins: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      background: 'transparent bottom',
      multiplier: 2,
    },
    {
      cell: 'Even',
      wins: [
        2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
      ],
      background: 'transparent bottom',
      multiplier: 2,
    },
    {
      cell: 'Red',
      wins: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
      background: 'transparent bottom',
      multiplier: 2,
    },
    {
      cell: 'Black',
      wins: [
        2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
      ],
      background: 'transparent bottom',
      multiplier: 2,
    },
    {
      cell: 'Odd',
      wins: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
      background: 'transparent bottom',
      multiplier: 2,
    },
    {
      cell: '19 - 36',
      wins: [
        19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
      ],
      background: 'transparent bottom',
      multiplier: 2,
    },
  ];
  constructor() {}
}
