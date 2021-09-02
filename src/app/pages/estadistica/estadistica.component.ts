import { Component, NgModule, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {
  view: [number, number] = [600, 400];
  

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  single = [
    {
      "name": "Big Log",
      "value": 78
    },
   
  ];

  projects: any = [];
  company: any;
  

  constructor(private readonly ps: ProjectService) {
    // Object.assign(this, { single });
  
  }

  onSelect(event:any) {
    console.log(event);
  }

  
  view2: [number, number] = [1000, 400];

  // options
  gradient: boolean = true;
  isDoughnut: boolean = false;

  colorScheme2 = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  single2 = [
    {
      "name": "Culminado",
      "value": 300
    },
    {
      "name": "En progreso",
      "value": 700
    },
    // {
    //   "name": "Pendiente",
    //   "value": 20
    // },
      
  ];
   
  single3 = [
    {
      "name": "Culminado",
      "value": 50
    },
    {
      "name": "En progreso",
      "value": 20
    },
    {
      "name": "Pendiente",
      "value": 30
    },
      
  ];
  single4 = [
    {
      "name": "Culminado",
      "value": 90
    },
    {
      "name": "En progreso",
      "value": 10
    },
    {
      "name": "Pendiente",
      "value": 0
    },
      
  ];
  single5 = [
    {
      "name": "Culminado",
      "value": 70
    },
   
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

ngGetProjectsByIdCompany(id: number) {

  this.ps.getProjects().subscribe((rest: any) => {
  
  this.projects = rest.data.filter((item: { companyId: number }) => item.companyId == id);
  console.log(rest.data);
  })
  
  }

  obtenerProyectos() {

    this.ps.getProjects().subscribe((rest: any) => {
    console.log(rest.data);
    this.projects = rest.data;
    })
    }
  
  ngOnInit(): void {
    this.ngGetProjectsByIdCompany(1)
    console.log(this.projects);
  }
}








