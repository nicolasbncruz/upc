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
  projects: Project[];
  companies: Company[];
  company: Company;

  constructor(private readonly projectService: ProjectService,
    private readonly companyService: CompanyService) { }

  ngOnInit(): void {
    this.ngGetProjectsByIdCompany(1);
    console.log("1 El promedio es: " + this.promedio);
    console.log("Proyectos por idEmpresa 2" + JSON.stringify(this.projects));
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

  view2: [number, number] = [800, 400];

  // options
  gradient: boolean = true;
  isDoughnut: boolean = false;


  ngGetProjectsByIdCompany(id: number) {
    this.projectService.getProjects().subscribe((rest: any) => {
      this.projects = rest.data.filter((item: { companyId: number }) => item.companyId == id);
      console.log("Proyectos por idEmpresa" + JSON.stringify(this.projects));
      console.log("2 El promedio es: " + this.promedio);
      console.log(this.projects.length);
      this.promedio = this.obtenerPromedio(this.projects);
      console.log("3 El promedio es: " + this.promedio);
    })
    console.log("4 El promedio es: " + this.promedio);
  }

  obtenerPromedio(projects: Project[]): number {
    let suma = 0;
    for (let project of projects) {
      suma += project.progress;
    }
    console.log(suma / projects.length);
    return suma / projects.length;
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








