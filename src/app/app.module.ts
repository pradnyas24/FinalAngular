import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{DashboardModule} from './dashboard/dashboard.module'


import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
import { AgGridModule } from "ag-grid-angular";
import {AppComponent} from './app.component';
import{HttpModule} from '@angular/http';
import{HttpClientModule} from '@angular/common/http';
// import{RouterModule, Routes} from '@angular/router';
import {CurrencyTableModule} from './dashboard/currency-table/currency-table.module';
import { CurrencyTableComponent } from './dashboard/currency-table/currency-table.component';
import {PersonService} from './shared-service/person.service';
import { PiechartComponent } from './piechart/piechart.component';

import { ChartsModule } from 'ng2-charts';



// const appRoutes:Routes=[
//   {path:'op', component:CurrencyTableComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule, 
    DashboardModule,
    HttpModule,
    AgGridModule.withComponents([]),
    // RouterModule.forRoot(appRoutes)
    ChartsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
