import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Servicio } from './servicio';
import { SERVICIOS } from './servicios.json';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  servicio: Servicio;
  servicios: Servicio[];

  constructor() { }


  getServicios(): Observable<Servicio[]> {
    return of(SERVICIOS);
  }

  // getServicio(id: number): Observable<Servicio> {
  // return SERVICIOS.find(X => X.id == id);
  // }

}


