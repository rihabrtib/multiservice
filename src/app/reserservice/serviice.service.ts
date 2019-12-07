import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Serviice {
  constructor(
    public id: number,
    public  titre:string,
    public decription:string,


  ) { }
}
@Injectable({
  providedIn: 'root'
})
export class ServiiceService {

  constructor(private http: HttpClient) { }


  Url = 'http://localhost:9000/service/deleteservices';


  getService() {
    return this.http.get<Serviice[]>('http://localhost:9000/service/allservice');
  }

  deleteService(service: Serviice) {
    return this.http.delete<Serviice[]>(this.Url + "/" + service.id);
  }

}


