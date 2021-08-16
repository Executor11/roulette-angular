import { Component, Input, OnInit } from '@angular/core';
import { BetService } from '../../shared/bet.service';
import { MoneyService } from '../../shared/money.service';
import { RouletteCellService } from '../roulette-cell.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent implements OnInit {
  @Input() cells: any;
  @Input() index!: number;
  chipBetted: boolean = false;

  chipsCount: number = 0;

  constructor(
    public betService: BetService,
    private moneyService: MoneyService,
    private rouletteCellService: RouletteCellService
  ) {}

  ngOnInit() {}

  showPosition() {
    if (this.betService.canIBet) {
      let hovered = this.rouletteCellService.cells[this.index].wins;
      this.rouletteCellService.cells.forEach((e) => {
        if (hovered == e.wins) {
          this.rouletteCellService.cells.forEach((item) => {
            if (e.wins.includes(+item.cell)) {
              item.background = item.background + ' active';
            }
          });
        }
      });
    }
  }

  hidePosition() {
    if (this.betService.canIBet) {
      this.rouletteCellService.cells.forEach((e) => {
        if (e.background.includes('active')) {
          e.background = e.background.slice(0, -6);
        }
      });
    }
  }

  ////

  betChip() {
    if (this.betService.canIBet) {
      this.hidePosition();

      if (this.chipsCount >= 10) this.chipsCount = 0;

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
