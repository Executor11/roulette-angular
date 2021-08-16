import { CellComponent } from './roulette/roulette-cells/cell/cell.component';
import { RouletteSpinComponent } from './roulette/roulette-spin/roulette-spin.component';
import { RouletteHeaderComponent } from './roulette/roulette-header/roulette-header.component';
import { RouletteCellsComponent } from './roulette/roulette-cells/roulette-cells.component';
import { RouletteBetComponent } from './roulette/roulette-bet/roulette-bet.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouletteComponent } from './roulette/roulette.component';
import { RouletteBallComponent } from './roulette/roulette-spin/roulette-ball/roulette-ball.component';
import { PopupComponent } from './roulette/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    RouletteComponent,
    RouletteBetComponent,
    RouletteCellsComponent,
    RouletteHeaderComponent,
    RouletteSpinComponent,
    CellComponent,
    RouletteBallComponent,
    PopupComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
