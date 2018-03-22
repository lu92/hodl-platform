import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpenPositionsComponent } from './open-positions/open-positions.component';
import { TradingHistoryComponent } from './trading-history/trading-history.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { CurrencyDropDownComponent } from './customComponents/currency-drop-down/currency-drop-down.component';
import { ConditionDropDownComponent } from './customComponents/condition-drop-down/condition-drop-down.component';
import { SwapsComponent } from './swaps/swaps.component';
import { ConditionSwapComponent } from './swaps/condition-swap/condition-swap.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'exchanges', component: ExchangesComponent},
  { path: 'open-positions', component: OpenPositionsComponent},
  { path: 'swaps', component: SwapsComponent },
  { path: 'trading-history', component: TradingHistoryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OpenPositionsComponent,
    TradingHistoryComponent,
    ExchangesComponent,
    CurrencyDropDownComponent,
    ConditionDropDownComponent,
    SwapsComponent,
    ConditionSwapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
