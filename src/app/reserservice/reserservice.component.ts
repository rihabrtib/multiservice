import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { ServiiceService, Serviice } from './serviice.service';
//import { ClientService, Client } from '../user/client.service';
import { OuvrierService, Ouvrier } from '../home/ouvrier.service';
import * as jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-reserservice',
  templateUrl: './reserservice.component.html',
  styleUrls: ['./reserservice.component.scss']
})
export class ReserserviceComponent implements OnInit {

  submitted = false;
  success = false;
  servicees: any;
  servicess: Serviice[];
  ouvrier:any;
  ouvriers:Ouvrier[];
  buttonDisabled: boolean
Activate: boolean
selectedValue: String

 
 constructor(private serviceouvrier: OuvrierService,private service: ServiiceService) { }

  ngOnInit() {
  

      this.service.getService().subscribe(data => {
        this.servicess = data;
        this.serviceouvrier.getOuvrier().subscribe(data => {
          this.ouvriers = data;
        })
      })
  
    }
  
    Delete(serv) {
      this.service.deleteService(serv)
        .subscribe(data => {
          this.servicess = this.servicess.filter(p => p !== serv);
          alert(" voulez vous supprimer ?");
        })
     
    }
   
    onChange(event) {
      if(Option) {
         this.buttonDisabled = true
       } else {
        this.buttonDisabled = false
      }
       return this.buttonDisabled;
      }
      
     
}

