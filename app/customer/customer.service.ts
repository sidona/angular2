/**
 * Created by Sidona on 8/20/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
//import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from "rxjs/Rx";
// get everything from Rx
const URL_CUSTOMER='app/customer.json';

@Injectable()
export class CustomerService{

  constructor(private _http:Http){}

  getCustomers(){
    return this._http.get(URL_CUSTOMER)
      .map((response:Response)=> response.json())
      .catch(this._handleError);
  }

  _handleError(err:any){
    console.log(err);
    return Observable.throw(err) ;//our opportunity customize this error
  }
}
