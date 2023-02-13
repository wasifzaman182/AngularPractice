import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-component',
  template: `
            <h1>{{message}}</h1>
            <h1>{{message | lowercase}}</h1>  <!-- pipe to change into lower case -->
            <h1>{{message | uppercase}}</h1>  <!-- pipe to change into upper case -->
            <h1>{{message | titlecase}}</h1>  <!-- pipe of title  case -->
            <h1>{{message | slice:3:5}}</h1>  <!-- pipe of pipe  case -->
            <h1>{{person | json}}</h1>  <!-- pipe of json  case -->
            <!-- number pip example-->
            <h1>{{5.235 | number:'1.2-3'}}</h1>   <!-- 1 show the integer values,, 2-3 shows the range after the decimal points-->
            <h1>{{5.235 | number:'3.4-5'}}</h1>
            <h1>{{5.235 | number:'3.1-2'}}</h1>

            <h1>{{0.25   | percent}}</h1>  <!-- pipe of percentage  case -->

            <h1>{{0.25   | currency}}</h1>  <!-- pipe of currency  case -->
            <h1>{{0.25   | currency:'GBP'}}</h1>  <!-- pipe of currency  case -->

            <h1>{{d}}</h1>  <!-- pipe of DATE  case -->
            <h1>{{d | date:'short'}}</h1>  <!-- pipe of DATE  case -->
            <h1>{{d | date:'shortDate'}}</h1>  <!-- pipe of DATE  case -->
            <h1>{{d | date:'shortTime'}}</h1>  <!-- pipe of DATE  case -->



`,
  styleUrls: ['./pipes-component.component.css']
})
export class PipesComponentComponent implements OnInit {

  public message='Hello Pipes examples';

  public person ={
    "firstName":"Wasif",
    "lastName" :"Zaman"
  }

  public  d = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
