import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
   id: number=1;
  users: any = [];
  adminDepartment!: string;

  constructor(private service:LoginService){}

  ngOnInit(): void {
    this.service.getUsersByRole(this.id).subscribe(data => {
      console.log(data)
      this.users = data;      
      // this.adminDepartment = this.service.getDepartment()     
     
    }, error => console.log(error));   
     
    
  }


}
