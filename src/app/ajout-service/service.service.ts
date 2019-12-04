import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor() { }
}
@Injectable({
  providedIn: 'root'
})


export class ServiceService{

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:9000/service/add';
  Url3 = 'http://localhost:9000/client/deleteclient';
  



  addClient(service: Service) {
    return this.http.post<Service>(this.Url, service);
  }
}