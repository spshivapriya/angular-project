import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-view-super-admin',
  templateUrl: './view-super-admin.component.html',
  styleUrls: ['./view-super-admin.component.css']
})
export class ViewSuperAdminComponent implements OnInit{
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
