import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TeamRolesComponent } from './components/team-roles/team-roles.component';
import { canActivate } from './routeGuard/auth.guard';
import { Workflow1Component } from './components/workflow1/workflow1.component';
import { Workflow2Component } from './components/workflow2/workflow2.component';
import { PeopleComponent } from './components/people/people.component';
import { DepartmentComponent } from './components/department/department.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'workflow1', component: Workflow1Component,canActivate:[canActivate] },
  { path: 'workflow2/:id', component: Workflow2Component,canActivate:[canActivate] },
  { path: 'teamroles', component: TeamRolesComponent,canActivate:[canActivate] },
  { path: 'dashboard', component: DashboardComponent,canActivate:[canActivate] },
  { path: 'sidebar', component: SidebarComponent,canActivate:[canActivate] },
  { path: 'people', component: PeopleComponent, canActivate: [canActivate]},
  {path : 'department', component: DepartmentComponent,canActivate:[canActivate] },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
