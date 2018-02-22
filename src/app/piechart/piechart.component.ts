import { Component, OnChanges, ViewChild, ElementRef,OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})


export class PiechartComponent implements OnInit {

    public pieChartLabels:string[] = ['Transaction Pass', 'Transaction Fail', 'Screen Pass' ,'Screen Fail'];
    public pieChartData:number[] = [300, 500, 100,200];
    public pieChartType:string = 'pie';
    public pieColors = ['orange','red','green'];
 

  constructor() 
  {}

  ngOnInit() {
  }

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
