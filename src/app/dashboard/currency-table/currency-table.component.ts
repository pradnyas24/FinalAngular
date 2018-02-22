import { Component, OnInit } from '@angular/core';
import{Person} from '../../person';
import { PersonService } from '../../shared-service/person.service';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.css']
})
export class CurrencyTableComponent implements OnInit {

 private persons:Person[];
  
  constructor(private _personService:PersonService) { }

  ngOnInit() {
    this._personService.getPersons().subscribe((persons)=>{
      console.log(persons);
      this.persons=persons;
    },(error)=>{
      console.log(error);
    })
  }

  

}
