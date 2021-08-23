import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

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
