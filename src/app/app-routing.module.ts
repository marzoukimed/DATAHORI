import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  { path:'', component: EmployeesComponent},
  { path:'Add', component: CreateEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
