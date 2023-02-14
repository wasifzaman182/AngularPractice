import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
          <h2>Employee Details</h2>
          <ul *ngFor="let ep of employees">
            <li>{{ep.id}}. {{ep.name}}- {{ep.age}}</li>
          </ul>
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees:any =[];

  constructor(private _employee:EmployeeService) { }

  //hokes
  // this will automatically call when component initailzed
  //now making the getEmpolyee() to subscribe --> first is param of the method followed by => and body and on right we assign to the local variable

  ngOnInit(): void {
    this._employee.getEmployee()
    .subscribe(data =>this.employees=data);
  }

}
