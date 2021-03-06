import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
       { path: '', component: AdminLayoutComponent,  canActivate: [AuthGuardService] ,
        children: [
       { path: 'dashboard',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }]},
      { path: 'login', component: LoginComponent},
      { path: 'login', redirectTo: 'login', pathMatch: 'full'},
      { path: 'logout', component: LogoutComponent},
];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
