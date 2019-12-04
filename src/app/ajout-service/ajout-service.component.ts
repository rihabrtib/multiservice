import { Component, OnInit } from '@angular/core';
import {ServiceService, Service } from './service.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-ajout-service',
  templateUrl: './ajout-service.component.html',
  styleUrls: ['./ajout-service.component.scss']
})
export class AjoutServiceComponent implements OnInit {

  constructor(private service: ServiceService) { }
  submitted = false;
  success = false;
  services: Service[];
  messageForm = new FormGroup({
  titre: new FormControl('', [Validators.required]),
  decription: new FormControl('', [Validators.required]),
  

  })

  ngOnInit() {
  }
  onSubmit() {
    
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
    this.service. addClient(this.messageForm.value).subscribe(
      data => {
        if (data) {

        }


      },
      err => {
        console.log("error sending data")
      },
      () => {
        alert("Confirmez?")
        console.log("data sent")
      }



    )
   
  }

  
}

