import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyTableComponent } from './currency-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CurrencyTableComponent],
  exports:[CurrencyTableComponent]
})
export class CurrencyTableModule { }
