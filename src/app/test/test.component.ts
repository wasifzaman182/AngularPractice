import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
      Examples of data binding by using interpolation method
  </h2>
  <br>
  <h3>
    Hello dynamic {{username}} use
  </h3>
  <br><br>
  <h3>
    Example of string concatinatio {{"welcome " +"You"}}
  </h3>
  <br><br>
  <h3>
    Example of upper case {{username.toUpperCase()}}
  </h3>
  <br><br>
  <h3>
    Example of calling method {{greating()}}
  </h3>
  <br><br>
  <h3>
    Example of site address {{siteUrl}}
  </h3>
  <br><br>
  <h3>
    Example of Property binding 
  </h3>
  <input type="text" value="wasif">
  <br><br>
  <h3>
    Example of Property binding using bind-propertyName
  </h3>
  <input bind-disabled="isDisabled" type="text" value="wasif">
  <br><br>
  <h3 class="text-success">
    Example of class binding Example 1
  </h3>
  <br>
  <h3 [class]="successClass">
    Example of class binding Example by defining proprty 
  </h3>
  <br>
  <h3  class="text-special" [class]="successClass">
    Example of class binding and property binding Example by defining proprty 
  </h3>
  <br>
  <h3  [class.text-danger]="hasError">
    Example of Condiditonaly applying html
  </h3>
  <br>
  <h3  [ngClass]="messageClass">
    Example of ngClass
  </h3>
  <br>
  <button (click)="onClick()">Greet</button>
  <br>
  <br>
  <input #message type="text"> 
  <button (click)="getValueFromInputField(message.value)">Click</button>
<br><br>
<h2>Two way data binding</h2>
  <input [(ngModel)]="name" type="text"> 
  {{name}}

  `,
  styles: [`
        .text-success{
          color:green;
        }

        .text-danger{
          color:red;
        }

        .text-special{
          font-style: italic;
        }
  `]
})
export class TestComponent implements OnInit {

  public username="wasif";
  public siteUrl=window.location.href;
  public isDisabled=true;
  public  isSpecial=true;
  public name="";

  //Example of conditionaly applying css
  public hasError=true;

  //Example of class binding
  public successClass="text-success"

  //Example of ngClass directory
  public messageClass={
    "text-success" : !this.hasError,
    "text-danger": this.hasError,
    "text-specail": this.isSpecial,
  }

  constructor() { }

  ngOnInit(): void {
  }

  greating(){
    return this.username;
  }

  //on click event example
  onClick(){
    console.log("Welcome to angular world")
  }

  //example of template reference varialbes
  getValueFromInputField(value:any){
    console.log(value);
  }
}
