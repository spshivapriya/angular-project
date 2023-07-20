import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-view-admin-profile',
  templateUrl: './view-admin-profile.component.html',
  styleUrls: ['./view-admin-profile.component.css']
})
export class ViewAdminProfileComponent implements OnInit {
   id!: number;
  userdetails: any = {};
  constructor(private loginService: LoginService) { }
  
  ngOnInit(): void {
    this.id = this.loginService.getUserId();
    this.loginService.getUserById(this.id).subscribe(data => {
       this.userdetails = data;
       console.log(this.userdetails)   
    }, error => console.log(error)); 
    
  }


}
