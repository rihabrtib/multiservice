import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Type } from '@angular/compiler';


export class Ouvrier {
  constructor(
    public id: number,

    public moyenne: Float32List,
    public Typedouvrier: Type,
    public available: boolean,
  ) { }
}


@Injectable({
  providedIn: 'root'
})
export class OuvrierService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:9000/ouvrier/deleteouvrier';
  url1 = 'http://localhost:9000/ouvrier/available';
  url2 = 'http://localhost:9000/ouvrier/update';
 


  getOuvrier() {
    return this.http.get<Ouvrier[]>('http://localhost:9000/ouvrier/allouvrier');
  }
  getOuvrierAvailable() {
    return this.http.get<Ouvrier[]>(this.url1);
  }

  deleteOuvrier(ouvrier: Ouvrier) {
    return this.http.delete<Ouvrier>(this.Url + "/" + ouvrier.id);
  }
  SetAvailable(id: number ) {
    return this.http.get<Ouvrier>(this.url2 + '/' + id);
  }

}


