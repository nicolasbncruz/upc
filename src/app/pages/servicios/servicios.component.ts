import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  services: any = [];

  constructor(private router: Router,
    private readonly ss: ServicioService,) { }

  obtenerServicios() {
    this.ss.getServices().subscribe((rest: any) => {
      console.log(rest.data);
      this.services = rest.data;
    })
  }

  ngOnInit(): void {
    this.obtenerServicios();
  }

  esRutaHome() {
    let rpta: boolean = false;
    let ruta: string = this.router.url;
    const RUTAHOME: string = "/";
    if ((ruta != null || ruta != undefined) && ruta == RUTAHOME) {
      rpta = !rpta;
    }
    return rpta;
  }

}
