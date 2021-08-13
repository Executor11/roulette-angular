import { Injectable } from '@angular/core';
import { MoneyService } from './money.service';
import { SpinRouletteService } from './spin-roulette.service';

@Injectable({
  providedIn: 'root',
})
export class BetService {
  canIBet: boolean = false;
  isDisabled: boolean = false;
  spins: boolean = false;

  bettedCells: any[] = [];

  chip: number = 1000;

  oldWins: Array<number> = [];

  constructor(
    private spinRouletteService: SpinRouletteService,
    private moneyService: MoneyService
  ) {}

  spin() {
    const randomDegrees = Math.floor(Math.random() * 360) - 3600;
    this.spinRouletteService.setDegrees(randomDegrees);
    this.spins = true;
    this.isDisabled = true;

    setTimeout(() => {
      this.isDisabled = false;
      this.spins = false;
      let win = this.spinRouletteService.winNumber;
      let gain = 0;

      this.oldWins.unshift(win);

      this.bettedCells.map((bet) => {
        if (bet.wins.includes(win)) {
          console.log(bet.cell, bet.money * bet.multiplier);
          gain += bet.money * bet.multiplier;
        }
      });
      this.moneyService.setMoney(this.moneyService.getMoney() + gain);
      this.bettedCells = [];
    }, 16000);

    this.spinRouletteService.state.next('start');
    this.spinRouletteService.state.next('stop');
  }
}
