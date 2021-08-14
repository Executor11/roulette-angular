import { Component, Input, OnInit } from '@angular/core';
import { BetService } from '../../shared/bet.service';
import { MoneyService } from '../../shared/money.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent implements OnInit {
  @Input() cells: any;
  chipBetted: boolean = false;

  chipsCount: number = 0;

  constructor(
    public betService: BetService,
    private moneyService: MoneyService
  ) {}

  ngOnInit() {}

  betChip() {
    if (this.betService.canIBet) {
      if (this.chipsCount > 10) {
        this.chipsCount = 0;
      }
      this.chipsCount++;
      this.betService.bettedCells.push({
        money: this.betService.chip,
        cell: this.cells.cell,
        wins: this.cells.wins,
        multiplier: this.cells.multiplier,
        index: this.chipsCount,
      });

      this.betService.bettedAverage += +this.betService.chip;

      this.moneyService.setMoney(
        this.moneyService.getMoney() - this.betService.chip
      );

      this.chipBetted = true;
      this.betService.canIBet = false;
    }
  }
}
