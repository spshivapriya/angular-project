import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit{
  
  id!: number;
  userdetails: any = {};
  constructor(private loginService: LoginService) { }
  
  ngOnInit(): void {
    this.id = this.loginService.getUserId();
    this.loginService.getUserById(this.id).subscribe(data => {
      console.log(data)
      this.userdetails = data;
       console.log(this.userdetails)   
    }, error => console.log(error)); 
    
  }




}
