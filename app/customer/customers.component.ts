/**
 * Created by Sidona on 8/19/2016.
 */
import {Component,OnInit} from '@angular/core';
import {CustomerComponent} from './customer.component';
import {CustomerService} from "./customer.service";
import {Observable} from "rxjs/Rx";

@Component({

  selector:'app-customers',
  templateUrl:'app/customer/customers.component.html',
  directives:[CustomerComponent],
  providers:[CustomerService]
})

export class CustomersComponent implements OnInit{
customers: Observable <any>;


  constructor(private _customerService:CustomerService){

  }

  ngOnInit(){
    this.customers=this._customerService.getCustomers()
      .catch((err)=> {
        console.log(err);
        return Observable.of(true);
      });
  }
}
