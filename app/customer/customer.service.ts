/**
 * Created by Sidona on 8/20/2016.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class CustomerService{
  constructor(){}

  getCustomers(){
    return [
      {
        id:1,
        name:'ward'
      },
      {
        id: 2,
        name: 'sid'
      }

    ];
  }
}
