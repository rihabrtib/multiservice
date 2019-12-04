import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { LoginComponent } from '../../login/login.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { AjoutOuvrierComponent } from 'app/ajout-ouvrier/ajout-ouvrier.component';
import { AjoutServiceComponent } from 'app/ajout-service/ajout-service.component';
import { AuthGuardService } from 'app/auth/auth-guard.service';
import { ReserserviceComponent } from 'app/reserservice/reserservice.component';


export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard', component: HomeComponent ,  canActivate: [AuthGuardService]},
    { path: 'user', component: UserComponent ,  canActivate: [AuthGuardService]},
    { path: 'table', component: TablesComponent ,  canActivate: [AuthGuardService]},
    { path: 'reservation', component: ReserserviceComponent ,  canActivate: [AuthGuardService]},
    { path: 'ajououvrier', component: AjoutOuvrierComponent ,  canActivate: [AuthGuardService]},
    { path: 'ajouservice', component: AjoutServiceComponent ,  canActivate: [AuthGuardService]}
];
