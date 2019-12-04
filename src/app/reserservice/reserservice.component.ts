import { Component, OnInit, Input } from '@angular/core';

import * as jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-reserservice',
  templateUrl: './reserservice.component.html',
  styleUrls: ['./reserservice.component.scss']
})
export class ReserserviceComponent implements OnInit {
  message: any ;


 services = [
{
  idservice: '1',
  type_service: 'electricite',
  date_debut: '20-11-2019',
  id_client: '10',
  Nom: 'Hatem',
  tel: '24512228',
  etat_service: 'initial',
},
{
  idservice: '2',
  type_service: 'chaufage',
  date_debut: '22-11-2019',
  id_client: '10',
  Nom: 'Hamza',
  tel: '24512228',
  etat_service: 'encours',

},
{
  idservice: '3',
  type_service: 'blomberie',
  date_debut: '22-11-2019',
  id_client: '11',
  Nom: 'Ramzi',
  tel: '24512228',
  etat_service: 'finis',
},
]

public ouvriers = [{Nom: 'Ahmed'}, {Nom: 'foued'}, {Nom: 'nabil'}, {Nom: 'mohamed'}, {Nom: 'Ali'}]

buttonDisabled: boolean
Activate: boolean
selectedValue: String
  Option: ( defaultSelected?: false) => HTMLOptionElement
  token: any;

  constructor() { }

  ngOnInit() {}

  onChange(event) {
    if(Option) {
       this.buttonDisabled = true
     } else {
      this.buttonDisabled = false
    }
     return this.buttonDisabled;
    }
    onbegin(index: number) {
   this.services[index].etat_service = 'encours'
   this.buttonDisabled = false
   this.Activate = true
}
ChekToken() {
  this.token = jwt_decode(sessionStorage.getItem('token'));
  console.log(this.token);
  const Data =  this.token.sub;
   console.log(Data);

   var messages =Data.substring(0, Data.length).split("User");
   console.log(messages[1])     
}
    onfinis(index: number){
  this.services[index].etat_service = 'finis'
  this.buttonDisabled = false
}

}