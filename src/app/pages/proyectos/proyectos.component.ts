import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  projects: any = [];

  constructor(private readonly ps: ProjectService) { }

  obtenerProyectos() {
    this.ps.getProjects().subscribe((rest: any) => {
      console.log(rest.data);
      this.projects = rest.data;
    })
  }

  ngOnInit(): void {
    this.obtenerProyectos();
  }

}
