import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RouletteCellService } from '../roulette-cells/roulette-cell.service';

@Injectable({
  providedIn: 'root',
})
export class SpinRouletteService {
  public state: Subject<string> = new Subject();
  public slice = 360 / 37;
  public newDegrees = Math.floor(Math.random() * 360) - 3600;

  public winNumber!: number;

  constructor(private rouletteCellService: RouletteCellService) {}

  setDegrees(degrees: number): void {
    this.newDegrees = degrees;
    this.winNumber =
      this.rouletteCellService.rouletteCells[
        Math.floor((3600 + (this.newDegrees + this.slice / 2)) / this.slice)
      ];
  }
}
