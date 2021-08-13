import { Component, OnInit } from '@angular/core';
import { RouletteCellService } from './roulette-cell.service';

@Component({
  selector: 'app-roulette-cells',
  templateUrl: './roulette-cells.component.html',
  styleUrls: ['./roulette-cells.component.scss'],
})
export class RouletteCellsComponent implements OnInit {
  cells: any = [];
  constructor(private rouletteCellservice: RouletteCellService) {
    this.cells = this.rouletteCellservice.cells;
  }

  ngOnInit() {}
}
