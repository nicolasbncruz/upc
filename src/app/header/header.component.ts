import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
