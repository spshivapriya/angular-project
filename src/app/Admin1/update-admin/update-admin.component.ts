import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
    id!: number;
  user: any = {};
  constructor(private loginService: LoginService) { }
  
  ngOnInit(): void {
    this.id = this.loginService.getUserId();
    this.loginService.getUserById(this.id).subscribe(data => {
      console.log(data)
      this.user = data;
       console.log(this.user)   
    }, error => console.log(error)); 
      
  }
  onSubmit() {
    this.loginService.updateUser(this.user).subscribe(() => {
      alert('updated');
      
      //update alert??
    }, (error) => console.log(error));
  }

}