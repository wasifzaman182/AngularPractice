import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentlistComponent } from '../../../src/AppRoutingProject/departmentlist/departmentlist.component';
import { EmployeeListComponent } from '../../../src/AppRoutingProject/employee-list/employee-list.component';
import { PageNotFoundComponent } from '../../../src/app/page-not-found/page-not-found.component';

const routes: Routes = [
  //{path: '', redirectTo:'/department'}, //to redirect here by default
  {path:'department', component:DepartmentlistComponent},
  {path:'employee', component:EmployeeListComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
