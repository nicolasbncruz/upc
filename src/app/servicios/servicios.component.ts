import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
