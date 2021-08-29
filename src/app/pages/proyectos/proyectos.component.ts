import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  projects: any = [];
  service: any;

  constructor(private readonly ps: ProjectService,
    private readonly ss: ServicioService,
    private ar: ActivatedRoute) { }

  obtenerProyectos() {
    this.ps.getProjects().subscribe((rest: any) => {
      console.log(rest.data);
      this.projects = rest.data;
    })
  }

  ngGetProjectsByIdService(id: number) {
    this.ps.getProjects().subscribe((rest: any) => {
      this.projects = rest.data.filter((item: { serviceId: number }) => item.serviceId == id);
    })
  }

  ngOnInit(): void {
    this.obtenerProyectos();
  }

}
