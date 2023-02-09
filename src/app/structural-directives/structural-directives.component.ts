import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `
            <h1>Example for ngIf</h1>
            <h2 *ngIf="displayName">
              Angular structural direcitves 
            </h2>

            <h1>Example for ngIf with else by using ng-template</h1>
            <h2 *ngIf="displayName; else elseBlock ">
              using ngIf with else
            </h2>
            <ng-template #elseBlock>
              <h2>ngIf heading is headen and else block is showing by using ng-template</h2>
            </ng-template>
            <br>
            <br>
            <h1>Example for ngIf with then and  else by using ng-template</h1>
            <h2 *ngIf="displayName; then thenBlock; else elseBlock ">
              using ngIf with else
            </h2>
            <ng-template #thenBlock>
              <h2>ngIf heading then block is showing by using ng-template</h2>
            </ng-template>
            <ng-template #elseBlock>
              <h2>ngIf heading is then block is headen and else block is showing by using ng-template</h2>
            </ng-template>

  `,
  styles: [``]
})
export class StructuralDirectivesComponent implements OnInit {

  displayName=false;

  constructor() { }

  ngOnInit(): void {
  }

}
