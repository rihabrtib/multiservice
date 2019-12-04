import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { HomeComponent } from 'app/home/home.component';
import { ReserserviceComponent } from 'app/reserservice/reserservice.component';
import { UserComponent } from 'app/user/user.component';
import { TablesComponent } from 'app/tables/tables.component';
import { AjoutOuvrierComponent } from 'app/ajout-ouvrier/ajout-ouvrier.component';
import { AjoutServiceComponent } from 'app/ajout-service/ajout-service.component';






@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    ReactiveFormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [

    HomeComponent,
    UserComponent,
    TablesComponent,
    AjoutOuvrierComponent,
    AjoutServiceComponent,
    ReserserviceComponent,

  ]
})

export class AdminLayoutModule {}
