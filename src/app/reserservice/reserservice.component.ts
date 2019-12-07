import { Component, OnInit, Input } from '@angular/core';

import * as jwt_decode from 'jwt-decode';
import { ReserserviceService , Ouvrier } from './reserservice.service';
import { OptionBuilder } from '@ngui/map';



@Component({
  selector: 'app-reserservice',
  templateUrl: './reserservice.component.html',
  styleUrls: ['./reserservice.component.scss']
})
export class ReserserviceComponent implements OnInit {

  ouvriers: any;
  services: any
  message: any ;




// public ouvriers = [{Nom: 'Ahmed'}, {Nom: 'foued'}, {Nom: 'nabil'}, {Nom: 'mohamed'}, {Nom: 'Ali'}]



  buttonDisabled: boolean [] = [];
  Activate: boolean
  selectedValue: String
  Option: ( defaultSelected?: false ) => HTMLOptionElement
  token: any;
  value: number;
  text: string;

  constructor(private service: ReserserviceService) {}

  ngOnInit() {
  this.listOuvrier();
  this.listeClient();
  }
listOuvrier() {
  this.service.getOuvrier().subscribe(data => {
  this.ouvriers = data;
  })
}
listeClient() {
  this.service.getClt().subscribe(data => {
    this.services = data;
  })
}
  set(id) {
    const e = document.getElementById('select');
    this.value = e.options[e.selectedIndex].value;
    this.service.SetAvailable(this.value).subscribe((res: any) => {
    this.ouvriers = res ;
    })
}
   onChange(index: number) {
    const e = document.getElementById('select');
    this.text = e.options[e.selectedIndex].text;
    if (Option && this.text !== '') {
     this.buttonDisabled[index] = true
    } else {
      this.buttonDisabled[index] = false
    }
     return this.buttonDisabled[index];
     }
  onbegin(index: number) {
   this.services[index].etat_service = 'encours'
   this.ouvriers[index].available = false;
   this.buttonDisabled[index] = false
   this.Activate = true
}
  onfinis(index: number) {
  this.services[index].etat_service = 'finis'
  this.buttonDisabled[index] = false
}

}
