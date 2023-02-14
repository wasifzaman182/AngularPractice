import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmplyoee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public _url:string = '/assets/data/employee.json'
  constructor(private http: HttpClient) { }

  //making it to the observable 
 public getEmployee() : Observable<IEmplyoee[]>{
    return this.http.get<IEmplyoee[]>(this._url);
  }
}
