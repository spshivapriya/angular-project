import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  islogin!: boolean;
  user: any;
  roleName: any;

  constructor(private service: LoginService) { }
  ngOnInit(): void {
    this.user = this.service.getUser();
    this.roleName = this.service.getUserRole();
    this.islogin=this.service.isLoggedIn();

  }
  
 
  goToUserPage() {
    if (this.roleName == 'Admin') {
      window.location.href = '/admin'
    } else if (this.roleName == 'Employee') {
      window.location.href='/employee'
    } else {
      window.location.href='/super-admin'
    }
    
  }
  
  logOut() {
    this.service.logOut();
    window.location.reload();
    window.location.href = 'login';

  }
  
}
