import { Component, NgModule, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Company } from 'src/app/models/company';
import { Project } from 'src/app/models/project';
import { CompanyService } from 'src/app/services/company.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

  view: [number, number] = [60, 40];
  showLegend: boolean = true;
  showLabels: boolean = true;
  promedio: number = 0;
  misproyectos: Project[];
  companies: Company[];
  company: Company;
  mapaProjects = new Map();

  constructor(private readonly projectService: ProjectService,
    private readonly companyService: CompanyService) { }

  ngOnInit(): void {
    this.ngGetProjectsByIdCompany(1);
    console.log(this.mapaProjects);
    console.log(this.mapaProjects.size);
    console.log(this.mapaProjects);
  }

  onSelect(event: any) {
    console.log(event);
  }

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  single = [
    {
      "name": "Progreso",
      "value": this.promedio
    }
  ];

  view2: [number, number] = [400, 400];

  // options
  gradient: boolean = true;
  isDoughnut: boolean = false;


  ngGetProjectsByIdCompany(id: number) {
    this.projectService.getProjects().subscribe((rest: any) => {
      this.misproyectos = rest.data.filter((item: { companyId: number }) => item.companyId == id);
      for (let project of this.misproyectos) {
        this.mapaProjects.set(project.id, project);
      }
      this.promedio = this.obtenerPromedio(this.misproyectos);
    })
  }

  obtenerPromedio(projects: Project[]): number {
    let suma = 0;
    for (let project of projects) {
      suma += project.progress;
    }
    console.log(suma / projects.length);
    this.promedio = suma / projects.length;
    return this.promedio;
  }


  colorScheme2 = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  single2 = [
    {
      "name": "Culminado",
      "value": 30
    },
    {
      "name": "En progreso",
      "value": 70
    }
  ];

  single3 = [
    {
      "name": "Culminado",
      "value": 50
    },
    {
      "name": "En progreso",
      "value": 50
    }
  ];


  onSelect2(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate2(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate2(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onResize(event: any) {
    this.view = [event.target.innerWidth / 1.35, 400];
  }

}








