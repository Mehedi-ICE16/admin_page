import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TeamRolesComponent } from './components/team-roles/team-roles.component';
import { canActivate } from './routeGuard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'teamroles', component: TeamRolesComponent,canActivate:[canActivate] },
  { path: 'dashboard', component: DashboardComponent,canActivate:[canActivate] },
  { path: 'sidebar', component: SidebarComponent,canActivate:[canActivate] },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
