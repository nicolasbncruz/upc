import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private readonly http: HttpClient) { }

_getClientes(){
  return this.http.get('/api/clientes');
}

}
