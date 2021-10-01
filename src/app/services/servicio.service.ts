import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private readonly http: HttpClient) { }

  getServices() {
    return this.http.get('http://190.232.24.126/api/service/getservices');
  }
}
