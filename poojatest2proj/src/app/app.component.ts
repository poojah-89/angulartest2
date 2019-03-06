import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poojatest2proj';
  appclicks;

  i = 0;
  evenNumber = true;
  numofbtnclicks = [0];

  constructor() { }

  Toggle() {
    this.i++;
    this.numofbtnclicks.push(this.i);
    console.log(this.numofbtnclicks);
    if (this.i % 2 === 0) {
      this.evenNumber = true;
    }
    else {
      this.evenNumber = false;
    }

  }

  getColor(abc){
    if(abc>=5){
      return this.appclicks='blue';
    }
     
  }


}
