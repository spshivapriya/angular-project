import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // registrationForm: FormGroup;
  
  // get emailField() {
  //   return this.registrationForm.get('emailField');
  // }
  constructor(private login:LoginService, private router: Router) {
    // this.registrationForm = new FormGroup({
    //   emailField: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')])
    // });
  }
  ngOnInit(): void {
    this.login.getAllRoles().subscribe((data) => {
      this.roles = data;
      this.roles=this.roles.filter((rolename:any)=>rolename.roleName!='Super-admin')
      console.log(this.roles)
    })
    
  }
  onSubmit() {
    this.login.register(this.user).subscribe(
response => {
    //alert('User registered successfully');
          Swal.fire(
            '',
            'Registration successful',
            'success'
             );
              setTimeout(() => {
             window.location.href='/login'           
          }, 2000);
    
// Handle success (e.g., show a success message or redirect to login)
},
error => {
//alert('Registration failed');
// Handle error (e.g., show an error message)
   Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Registration failed! Email-id already exists ',
         footer: '<a href="http://localhost:4200/login">Already have an account?</a>'
          })
}
);
   }
//  goToLogin() {
//     this.router.navigate(['/login']);
// }


public user={
    
  firstName: '',
  lastName: '',
  emailId: '',
  password: '',
  phoneNo: '',
  address: '',
  departmentName: '',  
  role:{
            rid:''
        }  

}
  roles: any = [];
}
