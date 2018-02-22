import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard.component';
import {CurrencyTableModule} from './currency-table/currency-table.module';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    CurrencyTableModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
