import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailId!: string;
  password!: string;
  constructor(private loginService: LoginService) { }
    
  userDetails: any = {};
  roleName: string = '';

  login() {
    this.loginService.login(this.emailId,this.password).subscribe(
      (data) => {
        console.log(data);
        if (data !== null) {                
          this.userDetails = data;
          console.log(this.userDetails); 
          this.loginService.setUser(data);
          if (this.userDetails.approval == true) {
            //alert('Login successful'); 
          this.roleName = this.loginService.getUserRole();
            if (this.roleName == 'Admin') {
             Swal.fire(
            'Admin',
            'Login successful',
            'success'
             );
              setTimeout(() => {
             window.location.href='/admin'           
          }, 2000); 
                       
          } else if (this.roleName == 'Employee') {
             Swal.fire(
            'Employee',
            'Login successful',
            'success'
             );
            setTimeout(() => {
             window.location.href='/employee'           
          }, 2000); 
            
          } else if (this.roleName == 'Super-admin') {
            Swal.fire(
            'Super admin',
            'Login successful',
            'success'
            );
            setTimeout(() => {
              window.location.href='/super-admin'           
          }, 2000);            
          }            
          } else {
            Swal.fire(
              'Sorry',
              'Approval from admin is pending',
              'question'
            );
            //alert('admin not approved');
          }          

        } else {
          Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Login failed!check your email or password',
         footer: '<a href="http://localhost:4200/register">Are you a new user?</a>'
          })
          //alert('Login failed');
        }

       
        // Add any additional logic or redirection after successful login
      },
      error => {
        // alert('Login failed');
        // Handle login failure, e.g., display an error message
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Login failed!Something went wrong',
        
          })
      }
    );   
  }


}
