import { Component, OnInit } from '@angular/core';
import { BetService } from '../shared/bet.service';
import { MoneyService } from '../shared/money.service';

@Component({
  selector: 'app-roulette-header',
  templateUrl: './roulette-header.component.html',
  styleUrls: ['./roulette-header.component.scss'],
})
export class RouletteHeaderComponent implements OnInit {
  redNumbers: number[] = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];

  blackNumbers: number[] = [
    2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
  ];

  constructor(
    public moneyService: MoneyService,
    public betService: BetService
  ) {}

  ngOnInit() {}
}
