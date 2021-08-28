import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-detalle-service',
  templateUrl: './detalle-service.component.html',
  styleUrls: ['./detalle-service.component.css']
})
export class DetalleServiceComponent implements OnInit {

  projects: any = [];
  service: any = [];

  constructor(private readonly ps: ProjectService,
    private readonly ss: ServicioService,
    private ar: ActivatedRoute) { }

  getServiceById(id: number) {
    this.ss.getServices().subscribe((rest: any) => {
      this.service = rest.data.filter((item: { id: number }) => item.id == id);
      console.log(this.service);
    })
  }

  getProjectsByServiceId(id: number) {
    this.ps.getProjects().subscribe((rest: any) => {
      this.projects = rest.data.filter((item: { serviceId: number }) => item.serviceId == id);
      console.log(this.projects);
    })
  }

  ngOnInit(): void {
    this.ar.params.subscribe((params: Params) => {
      if (params.id) {
        this.getServiceById(params.id);
        this.getProjectsByServiceId(params.id);
      }
    })
  }

}
