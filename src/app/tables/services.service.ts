import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Services {
  constructor(
    public id: number,
    public  titre:string,
    public decription:string,
    public price :string ,

  ) { }
}


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }


  Url = 'http://localhost:9000/ouvrier/deleteouvrier';


  getService() {
    return this.http.get<Services[]>('http://localhost:9000/service/allservices');
  }

  deleteService(service: Services) {
    return this.http.delete<Services>(this.Url + "/" + service.id);
  }

}


