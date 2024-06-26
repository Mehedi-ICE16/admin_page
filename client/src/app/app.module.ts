import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule,HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { TeamRolesComponent } from './components/team-roles/team-roles.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LoaderComponent } from './components/loader/loader.component';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TeamsComponent } from './components/teams/teams.component';
import { RolesComponent } from './components/roles/roles.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { Workflow1Component } from './components/workflow1/workflow1.component';
import { Workflow2Component } from './components/workflow2/workflow2.component';
import { PeopleComponent } from './components/people/people.component';
import { DepartmentComponent } from './components/department/department.component';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddFormComponent } from './components/add-form/add-form.component';
// import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TeamRolesComponent,
    SidebarComponent,
    LoaderComponent,
    TeamsComponent,
    RolesComponent,
    AddTeamComponent,
    Workflow1Component,
    Workflow2Component,
    PeopleComponent,
    DepartmentComponent,
    AddRoleComponent,
    AddDepartmentComponent,
    AddEmployeeComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzTableModule,
    NzIconModule,
    NzFormModule,
    NzMenuModule,
    NzButtonModule,
    NzSkeletonModule,
    NgApexchartsModule,
    NzModalModule,
    NzDrawerModule,
    NzInputModule,
    NzSelectModule,
    NgMultiSelectDropDownModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
