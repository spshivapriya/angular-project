import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 

  id: number=2;
  users: any = [];
  adminDepartment!: string;

  constructor(private service:LoginService){}

  ngOnInit(): void {
    this.service.getUsersByRole(this.id).subscribe(data => {
      console.log(data)
      this.users = data;      
      this.adminDepartment = this.service.getDepartment()
      this.users = this.users.filter((deptName: { departmentName: string; }) => deptName.departmentName == this.adminDepartment);
      
     
    }, error => console.log(error));   
     
    
  }


}
