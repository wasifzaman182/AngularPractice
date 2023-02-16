import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipesComponentComponent } from './pipes-component/pipes-component.component';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {HttpClientModule} from '@angular/common/http';   

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StructuralDirectivesComponent,
    PipesComponentComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
