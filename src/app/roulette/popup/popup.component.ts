import { Component, OnInit } from '@angular/core';
import { MoneyService } from '../shared/money.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  resumed: boolean = false;

  continue: boolean = false;

  constructor(public moneyService: MoneyService) {
    if (localStorage.getItem('money')) {
      this.continue = true;
    }
  }

  ngOnInit() {}

  resume() {
    this.resumed = true;
  }

  newGame() {
    this.moneyService.setMoney(2500);
    this.resumed = true;
  }
}
