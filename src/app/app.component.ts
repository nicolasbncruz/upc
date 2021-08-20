import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'million';

  constructor(private router: Router) {
  }

  ngOnInit() {

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

  esDashboard() {
    let rpta: boolean = false;
    let ruta: string = this.router.url;
    const RUTADASHBOARD: string = "/dashboard";
    if ((ruta != null || ruta != undefined) && (ruta == RUTADASHBOARD || ruta.includes('dashboard'))) {
      rpta = !rpta;
    }
    return rpta;
  }

}


