import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyCodeAddComponent } from '../currency-code-add/currency-code-add.component';
import { CurrencyCodeDetailComponent } from '../currency-code-detail/currency-code-detail.component';
import { ExchangeRateAddComponent } from '../exchange-rate-add/exchange-rate-add.component';
import { CurrencyCodeComponent } from './currency-code.component';

const routes: Routes = [
  { path: '', component: CurrencyCodeComponent },
  { path: 'add', component: CurrencyCodeAddComponent },
  { path: ':id', component: CurrencyCodeDetailComponent },
  { path: ':id/exchange-rate/add', component: ExchangeRateAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyCodeRoutingModule { }
