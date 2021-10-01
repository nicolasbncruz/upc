import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectForm = this.fb.group({
    companyId: [""]

  })

  projects: any = [];
  companies: any = [];

  constructor(private fb: FormBuilder,
              private readonly ps: ProjectService,
              private readonly cs: CompanyService,
              private route: ActivatedRoute) { }

  obtenerProyectos(){
    let x: number = this.route.snapshot.params['id'];
    this.__getProjectsByCompany(x);
  }


/*
  obtenerProyectos(){
    this.ps.getProjects().subscribe((rest: any) => {
      this.projects = rest.data;
      console.log(this.projects);

    })
  }
*/
  obtenerEmpresas(){
    this.cs.getCompanies().subscribe((rest: any) => {
      this.companies = rest.data;
      
    })
  }


  __getCompaniesByName(id: number) {
    
    this.ps.getProjects().subscribe((rest: any) => {
      this.projects = rest.data.filter((item: { idEmpresa: number }) => item.idEmpresa == id);
      console.log(this.projects);
    
    })
  }

  __onSubmit(){

    if(this.projectForm.valid){
      this.__getCompaniesByName(this.projectForm.value.companyId);
    }else{
      
      this.obtenerProyectos();
    }
    console.log(this.projectForm);
    

  }

  ngOnInit(): void {
    this.obtenerProyectos();
    this.obtenerEmpresas();
  }


  __getProjectsByCompany(id: number) {
 
    if (id==0)
    {
      this.ps.getProjects().subscribe((rest: any) => {
      this.projects = rest.data;
      })

    }
    else{
      this.ps.getProjects().subscribe((rest: any) => {
        this.projects = rest.data.filter((item: { idEmpresa: number }) => item.idEmpresa == id);
      })
    } 
  }

  esAdmin() {
    let rpta: boolean = true;
    let x: number = this.route.snapshot.params['id'];
    if (x==0)
    {
      rpta = !rpta;
    }
    return rpta;
  }
  ngGetProjectsByIdService(id: number) {
    this.ps.getProjects().subscribe((rest: any) => {
      this.projects = rest.data.filter((item: { serviceId: number }) => item.serviceId == id);
    })
  }

  __getCompaniesById(id: number) {
    this.cs.getCompanies().subscribe((rest: any) => {
      this.companies = rest.data.filter((item: { id: number }) => item.id == id);
    })
  }



}