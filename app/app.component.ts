import { Component } from '@angular/core';

import { CustomersComponent } from './customer/customers.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [CustomersComponent]
})
export class AppComponent {

  // [] means property binding- c to d
  // ()means event binding -d to c

  title = 'Customer App';
  name = '';
  wardsColor = 'red';


  changeSuitColor() {
    this.wardsColor = this.wardsColor === 'red' ? 'blue' : 'red'
  }
}
