import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import {PersonService} from './shared-service/person.service';
//import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  /*private gridApi;
  private gridColumnApi;

  private columnDefs;*/

 /* private baseUrl:string="http://localhost:9080/person";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});*/

  
 // dataSource = new MatTableDataSource();


  constructor() {

  /*  this.columnDefs = [
      {
        headerName: "PAYEENAME",
        field: "payeeName",
        width: 150
      }
    ];

  }*/

 /* onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this._http
      .get(this.baseUrl+'/persons')
      .subscribe(data => {
        params.api.setRowData(data);
      });
  }*/


  /*applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }*/
}


}