import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html'
})
export class AppComponent {
  // [] means property binding- c to d
  // ()means event binding -d to c

  title='Customer App';
  name='sid';
  wardsColor='red';

  changeSuitColor(){
    this.wardsColor=this.wardsColor==='red'? 'blue':'red'
  }
}
