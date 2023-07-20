import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './user/employee/employee.component';
import { SuperAdminComponent } from './superAdmin/super-admin/super-admin.component';
import { ViewProfileComponent } from './user/view-profile/view-profile.component';
import { SideBarComponent } from './user/side-bar/side-bar.component';
import { UpdateComponent } from './user/update/update.component';
import { AdminComponent } from './Admin1/admin/admin.component';
import { ManageEmployeesComponent } from './Admin1/manage-employees/manage-employees.component';
import { AdminSideBarComponent } from './Admin1/admin-side-bar/admin-side-bar.component';
import { ViewAdminProfileComponent } from './Admin1/view-admin-profile/view-admin-profile.component';
import { UpdateAdminComponent } from './Admin1/update-admin/update-admin.component';
import { EmployeeListComponent } from './Admin1/employee-list/employee-list.component';
import { SuperAdminSideBarComponent } from './superAdmin/super-admin/super-admin-side-bar/super-admin-side-bar.component';
import { AdminListComponent } from './superAdmin/super-admin/admin-list/admin-list.component';
import { ManageAdminComponent } from './superAdmin/super-admin/manage-admin/manage-admin.component';
import { UpdateSuperAdminComponent } from './superAdmin/super-admin/update-super-admin/update-super-admin.component';
import { ViewSuperAdminComponent } from './superAdmin/super-admin/view-super-admin/view-super-admin.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    AdminComponent,
    EmployeeComponent,
    SuperAdminComponent,
    ViewProfileComponent,
    SideBarComponent,
    UpdateComponent,
    ManageEmployeesComponent,
    AdminSideBarComponent,
    ViewAdminProfileComponent,
    UpdateAdminComponent,
    EmployeeListComponent,
    SuperAdminSideBarComponent,
    AdminListComponent,
    ManageAdminComponent,
    UpdateSuperAdminComponent,
    ViewSuperAdminComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
