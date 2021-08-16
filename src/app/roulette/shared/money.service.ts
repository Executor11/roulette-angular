import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoneyService {
  money: number = 0;

  constructor() {
    if (localStorage.getItem('money')) {
      console.log(typeof localStorage.getItem('money'));
      const moneys: any = localStorage.getItem('money');
      this.money = Number(JSON.parse(moneys));
    }
  }

  getMoney(): number {
    return this.money;
  }

  setMoney(money: number) {
    this.money = money;

    localStorage.setItem('money', JSON.stringify(money));
  }
}
