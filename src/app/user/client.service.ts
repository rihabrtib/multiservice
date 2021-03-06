import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Client {

  constructor(public id: number,
    public username:string
  ) { }
}
@Injectable({
  providedIn: 'root'
})


export class ClientService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:9000/client/deleteclient';

  getClient() {
    return this.http.get<Client[]>('http://localhost:9000/client/allclient');
  }

  deleteClient(client: Client) {
    return this.http.delete<Client>(this.Url + "/" + client.id);
  }
  
}


