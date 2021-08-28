import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from './servicio';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(private router: Router,
    private servicioService: ServicioService) { }

  servicios: Servicio[];

  ngOnInit(): void {
    this.servicioService.getServicios().subscribe(
      (servicios) => this.servicios = servicios
    );
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
