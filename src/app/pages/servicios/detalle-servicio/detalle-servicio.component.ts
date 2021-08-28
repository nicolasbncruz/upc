import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from '../servicio';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent implements OnInit {

  servicio: Servicio;

  constructor(private activatedRoute: ActivatedRoute,
    private servicioService: ServicioService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id: number = +params.get('id');
      if (id) {
        // this.servicioService.getServicio(id).subscribe(servicio => {
        //   this.servicio = servicio;
        // })
      }
    });
  }

}
