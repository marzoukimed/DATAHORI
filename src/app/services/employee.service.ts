import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'https://dummy.restapiexample.com/api/v1/employees'

  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
