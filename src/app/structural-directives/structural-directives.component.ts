import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core'


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
            <h1>Examples of ngSwitch</h1>
            <div [ngSwitch]="color">
              <div *ngSwitchCase="'red'"><h2>you pick red color</h2></div>
              <div *ngSwitchCase="'green'"><h2>you pick green color</h2></div>
              <div *ngSwitchCase="'blue'"><h2>you pick blue color</h2></div>
              <div *ngSwitchDefault="'orange'"><h2>Pick again</h2></div>
            </div>
            <br>
            <h1>Examples of ngFor</h1>
            <div *ngFor="let c of colors; index as i">
             <h2>{{i+1}} {{c}} </h2>
            </div>
            <br>
            <h1>Examples of component interaction from  parent componet (app.component.ts) to child component(structural.direcitves.component.ts)</h1>
            <h2>Hello {{name}}</h2>
            <br>
            <h1>Examples of component interaction from child component(structural.direcitves.component.ts) to parent componet (app.component.ts) </h1>
           <button (click)="fireEvent()")>Send Event</button>
  `,
  styles: [``]
})
export class StructuralDirectivesComponent implements OnInit {

  //TODO :parent and child interaction issue
  @Input() public name: any;
  @Output() public child = new EventEmitter();


  displayName=false;
  //examples for ngswitch
  public color='red';

  //examples for ngFor
  public colors=["red","green","blue","white"];

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.child.emit('hello wasif ');
  }
}
