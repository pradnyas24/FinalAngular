import { Injectable } from '@angular/core';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import{Observable} from 'rxjs/Observable';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/catch';
// // import 'rxjs/add/operator/throw';


@Injectable()
export class PersonService {

  private baseUrl:string="http://localhost:9080/person";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  constructor(private _http:Http) { }

  getPersons(): Observable<any>
  {
    return this._http.get(this.baseUrl+'/persons', this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  errorHandler(error:Response)
  {
    return Observable.throw(error || "Server Error");
  }
}
