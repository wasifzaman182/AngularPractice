import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departmentlist',
  template: `
            <h1>Route param work </h1>
            <ul>
              <li *ngFor="let d of departments"> 
                {{d.id}} {{d.name}}
              </li>
            </ul>
  `,
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  departments =[
    {"id":1, "name":"java" },
    {"id":2, "name":"Angular" },
    {"id":3, "name":"Mongodb" },
    {"id":4, "name":"vue.js" },
]
  constructor() { }

  ngOnInit(): void {
  }

}
