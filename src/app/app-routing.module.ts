import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from 'src/app/user/employee/employee.component';
import { SuperAdminComponent } from 'src/app/superAdmin/super-admin/super-admin.component';
import { AdminComponent } from './Admin1/admin/admin.component';
import { SideBarComponent } from './user/side-bar/side-bar.component';
import { ViewProfileComponent } from './user/view-profile/view-profile.component';
import { UpdateComponent } from './user/update/update.component';
import { AdminSideBarComponent } from './Admin1/admin-side-bar/admin-side-bar.component';
import { ManageEmployeesComponent } from './Admin1/manage-employees/manage-employees.component';
import { ViewAdminProfileComponent } from './Admin1/view-admin-profile/view-admin-profile.component';
import { UpdateAdminComponent } from './Admin1/update-admin/update-admin.component';
import { EmployeeListComponent } from './Admin1/employee-list/employee-list.component';
import { SuperAdminSideBarComponent } from './superAdmin/super-admin/super-admin-side-bar/super-admin-side-bar.component';
import { ViewSuperAdminComponent } from './superAdmin/super-admin/view-super-admin/view-super-admin.component';
import { ManageAdminComponent } from './superAdmin/super-admin/manage-admin/manage-admin.component';
import { UpdateSuperAdminComponent } from './superAdmin/super-admin/update-super-admin/update-super-admin.component';
import { AdminListComponent } from './superAdmin/super-admin/admin-list/admin-list.component';
import { EmloyeeGuard } from './service/emloyee.guard';
import { AdminGuard } from './service/admin.guard';
import { SuperAdminGuard } from './service/super-admin.guard';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
 

  { path: 'admin', component: AdminComponent,canActivate:[AdminGuard],children:[
    { path: 'admin-side-bar', component: AdminSideBarComponent },
    { path: 'admin-view-profile', component: ViewAdminProfileComponent },      
    { path: 'manage-employees', component: ManageEmployeesComponent },
    { path: 'update-admin', component: UpdateAdminComponent },
    { path: 'employee-list', component: EmployeeListComponent },    
      
  ] },
  {
    path: 'employee', component: EmployeeComponent, canActivate:[EmloyeeGuard] ,children:[
      { path: 'emp-side-bar', component: SideBarComponent },
      { path: 'view-profile', component: ViewProfileComponent },
      { path: 'update', component: UpdateComponent },      
  ]},
  { path: 'super-admin', component: SuperAdminComponent,canActivate:[SuperAdminGuard] , children:[
    { path: 'super-admin-side-bar', component: SuperAdminSideBarComponent},
    { path: 'view-profile', component: ViewSuperAdminComponent},      
    { path: 'manage-admin', component: ManageAdminComponent },
    { path: 'update-super-admin', component: UpdateSuperAdminComponent },
    { path: 'admin-list', component:AdminListComponent },    
      
  ]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
