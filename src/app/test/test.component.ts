import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
      Examples of data binding by using interpolation method
  </h2>
  <br><br>
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

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public username="wasif";
  public siteUrl=window.location.href;
  public isDisabled=true;

  constructor() { }

  ngOnInit(): void {
  }

  greating(){
    return this.username;
  }
}
