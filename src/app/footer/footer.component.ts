import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
