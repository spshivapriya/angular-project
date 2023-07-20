import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css']
})
export class ManageAdminComponent implements OnInit{
   id: number=1;
  users: any = [];
  

  active: any = {};
  constructor(private service:LoginService){}

  ngOnInit(): void {
    this.service.getUsersByRole(this.id).subscribe(data => {
      console.log(data)
      this.users = data;      
      
     
    }, error => console.log(error));   
     
    
  }
  private getAlluser() {
    this.service.getAllUsers().subscribe(data => {
      this.users = data;
      //console.log(data)
    })
    
  }

deleteUser(id: number) {
  this.service.deleteUser(id).subscribe(() => {     
    alert('user deleted')
    window.location.reload();
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
