import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from '../Entities/Employe'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {

  employee: Employe = new Employe();
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newCategorie(): void {
    this.employee = new Employe();
  }

  save() {
      localStorage.setItem("formdata",JSON.stringify(this.employee));      
      console.log(this.employee);
  }

  onSubmit() {
    this.save();    
  }
}
