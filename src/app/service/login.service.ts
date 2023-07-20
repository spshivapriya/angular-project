import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
 private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  getAllRoles() {
    return this.http.get(`${this.baseUrl}/role/`)    
  }
  getAllUsers() {
    return this.http.get(`${this.baseUrl}/`)
  }
  register(user: any) {
    return this.http.post(`${this.baseUrl}/user/`, user);
  }

  login(emailId: string, password: string) {
  return this.http.get(`${this.baseUrl}/user/${emailId}/${password}`);
  }
  logOut() {
    localStorage.removeItem('user')
  }
  setUser(user:any) {
    localStorage.setItem('user',JSON.stringify(user));
  }

  getUser() {
    let userDetail = localStorage.getItem('user');
    if (userDetail == null) {
      return null;
    } else {
      return JSON.parse(userDetail);      
    }
    
  }
  getUserRole() {
    let role = this.getUser();
    return role.role.roleName;
  }

  getUserId() {
    let userId = this.getUser();
    return userId.id;
  }

  getRoleId() {
    let roleId = this.getUser();
    return roleId.role.rid;
  }
  getDepartment() {
    let user = this.getUser();
    return user.departmentName;
  }
  
  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/user/delete/${id}`);
  }
  updateUser( user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/user/`,user);
    
  }
  getUserById(id: number) {
    return this.http.get(`${this.baseUrl}/user/findById/${id}`)
  }
  getUsersByRole(id: number) {
    return this.http.get(`${this.baseUrl}/user/role/${id}`)     
  }
  isLoggedIn() {
    let str = localStorage.getItem('user');
    if (str == undefined || str == '' || str == null) {
      return false;
    } else {
      return true;
    }
  }
  getUserByEmailId(emailId:string) {
    return this.http.get(`${this.baseUrl}/user/${emailId}`)
  }

}
