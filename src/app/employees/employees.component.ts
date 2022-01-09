import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  
  searchText : any
  employees : any
  p:number=1;

  constructor(private Semployee: EmployeeService ,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.Semployee.getEmployeeList()
      .subscribe(
        data => {
          this.employees = data.data;
          
         console.log(data.data);
        },
        error => {
          console.log(error);
        });
  }

  deleteData(id: number):void{
    let index = this.employees.findIndex ( e =>e.id === id);
    if (index !== -1){
      this.employees.splice(index,1);
    }
    console.log(id);
  }

  
}
