import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css']
})
export class ManageEmployeesComponent {
  id: number=2;
  users: any = [];
  adminDepartment!: string;
  active: any = {};

  constructor(private service:LoginService){}

  ngOnInit(): void {
    this.service.getUsersByRole(this.id).subscribe(data => {
      console.log(data)
      this.users = data;      
      this.adminDepartment = this.service.getDepartment()
      this.users = this.users.filter((deptName: { departmentName: string; }) => deptName.departmentName == this.adminDepartment);
      
     
    }, error => console.log(error));   
     
    
  }
  

deleteUser(id: number) {
  this.service.deleteUser(id).subscribe(() => {
    this.users=this.users.filter((del:any)=>del.id!=id)
    alert('user deleted')
    }, (error) => console.log(error));
}
 approval(id: number) {
    this.service.getUserById(id).subscribe((data) => {
      this.active = data;
      if (this.active.approval == false) {
        this.active.approval = true;
        this.service.updateUser(this.active).subscribe((data) => {
          alert('updated');
        },(error) => console.log(error));
      } else  {
        this.active.approval = false;
        this.service.updateUser(this.active).subscribe((data) => {
          alert('updated');
        },(error) => console.log(error));
      }
      window.location.reload();
    }, (error) => console.log(error));
    
  }

}
