import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl="http://localhost:63671/api";
  readonly PhotoURL="http://localhost:63671/Photo";
  constructor(private http:HttpClient) { }
  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/department')
  }
  addDepartment(val:any){
    return this.http.post<any>(this.APIurl+'/department',val);
  }
  updateDepartment(val:any){
    return this.http.put<any>(this.APIurl+'/department',val);
  }
  deleteDepartment(val:any){
    return this.http.delete<any>(this.APIurl+'/department/',val);
  }

  // employee
  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/employee')
  }
  addEmployee(val:any){
    return this.http.post<any>(this.APIurl+'/employee',val);
  }
  updateEmployee(val:any){
    return this.http.put<any>(this.APIurl+'/employee',val);
  }
  deleteEmployee(val:any){
    return this.http.delete<any>(this.APIurl+'/employee/',val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIurl+'/employee/SaveFile/',val)
  }

  getAllDepartmentName():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl+'/Employee/GetAllDepartmentNames');
  }
} 
