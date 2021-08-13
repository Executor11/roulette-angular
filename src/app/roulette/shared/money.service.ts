import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoneyService {
  money: number = 10000;

  constructor() {}

  getMoney(): number {
    return this.money;
  }
  setMoney(money: number) {
    this.money = money;
  }
}
