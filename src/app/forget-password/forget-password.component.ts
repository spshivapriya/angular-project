import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
 
  emailId!: string;
  password!: string;
  password1!: string;
  user: any;
  constructor(private service: LoginService) { }
   ngOnInit(): void {
    
  }

  submit() {
    this.service.getUserByEmailId(this.emailId).subscribe((data) => {
      this.user = data;
      console.log(this.user)
    })
    if (this.password == this.password1) {
      this.user.password = this.password;
      console.log(this.user)
      this.service.updateUser(this.user).subscribe((data) => {
        alert('password reset')
        window.location.href = "/login";
      }, (error) => console.log(error));       
    }    
    
  }

}
