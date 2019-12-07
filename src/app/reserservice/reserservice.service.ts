import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Ouvrier {
  constructor(
    public id: number,
    public username: string,
    public available: boolean,
  ) {}
}
export class Client {
  constructor(
    public id: number,
    public email: String,
    public username: string,
    public tel: string,
    services: [{
                  id: number,
                  titre: string,
                  date: string,
                  Etat: string,
    }],
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class ReserserviceService {

  url1 = 'http://localhost:9000/ouvrier/available';
  url2 = 'http://localhost:9000/ouvrier/update';
  url3 = 'http://localhost:9000/client/allclient';


  constructor(private http: HttpClient) { }

  getOuvrier() {
    return this.http.get<Ouvrier[]>(this.url1);
  }
 getClt() {
  return this.http.get<Client[]>(this.url3);
 }
  SetAvailable(id: number ) {
    return this.http.get<Ouvrier>(this.url2 + '/' + id);
  }
}
