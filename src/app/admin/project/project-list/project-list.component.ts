import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { ProjectService } from 'src/app/services/project.service';

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
              private readonly cs: CompanyService) { }

  obtenerProyectos(){
    this.ps.getProjects().subscribe((rest: any) => {
      this.projects = rest.data;
      console.log(this.projects);

    })
  }

  obtenerEmpresas(){
    this.cs.getCompanies().subscribe((rest: any) => {
      this.companies = rest.data;
      
    })
  }


  __getCompaniesByName(id: number) {
    this.ps.getProjects().subscribe((rest: any) => {
      this.projects = rest.data.filter((item: { companyId: number }) => item.companyId == id);
    
    })
  }

  __onSubmit(){

    if(this.projectForm.valid){
      this.__getCompaniesByName(this.projectForm.value.companyId);
    }else{
      
      this.obtenerProyectos();
    }

  }

  ngOnInit(): void {
    this.obtenerProyectos();
    this.obtenerEmpresas();
  

  }

}
