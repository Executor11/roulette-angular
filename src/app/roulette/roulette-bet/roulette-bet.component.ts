import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BetService } from '../shared/bet.service';
import { MoneyService } from '../shared/money.service';
import { SpinRouletteService } from '../shared/spin-roulette.service';

@Component({
  selector: 'app-roulette-bet',
  templateUrl: './roulette-bet.component.html',
  styleUrls: ['./roulette-bet.component.scss'],
})
export class RouletteBetComponent implements OnInit {
  @ViewChild('chip') chip!: ElementRef;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
    if (this.betService.canIBet) {
      this.chip.nativeElement.style.left = event.pageX - 25 + 'px';
      this.chip.nativeElement.style.top = event.pageY - 25 + 'px';
    }
  }

  bets: any[] = [
    { img: './assets/img/10.png', chip: 10 },
    { img: './assets/img/20.png', chip: 20 },
    { img: './assets/img/50.png', chip: 50 },
    { img: './assets/img/100.png', chip: 100 },
    { img: './assets/img/500.png', chip: 500 },
    { img: './assets/img/1000.png', chip: 1000 },
  ];
  state: any = 'start';

  constructor(
    private spinRouletteService: SpinRouletteService,
    public moneyService: MoneyService,
    public betService: BetService
  ) {
    this.spinRouletteService.state.subscribe((value) => {
      this.state = value;
    });
  }

  ngOnInit() {}

  setBet(event: any) {
    if (!this.betService.spins) {
      this.betService.canIBet = !this.betService.canIBet;
      if (this.betService.canIBet) {
        this.betService.chip = event.target.getAttribute('data-chip');

        this.chip.nativeElement.style.left = event.pageX - 40 + 'px';
        this.chip.nativeElement.style.top = event.pageY - 40 + 'px';
      }
    }
  }
}
