import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute } from '@angular/router';
import { MilestoneService } from 'src/app/services/milestone.service';



@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  projectDetailForm = this.fb.group({
    projectName : [''],
    projectResume : [''],
    projectClientDt : [''],
    projectType : [''],
    projectManager : [''],
    projectCreateDt : [''],
    projectIniPlanDt : [''],
    projectIniRealDt : [''],
    projectEndPlanDt : [''],
    projectEndRealDt : [''],
    projectProgress : ['']
  });

  projects: any = [];
  milestones: any = [];

  constructor(private fb: FormBuilder,
              private readonly ps: ProjectService,
              private readonly ms: MilestoneService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerProyecto();
  }

  __getProjectById(id: number) {
    this.ps.getProjects().subscribe((rest: any) => {
    this.projects = rest.data.filter((item: { id: number }) => item.id == id);
    })
    
    
    this.ms.getMilestones().subscribe((rest: any) => {
      this.milestones = rest.data.filter((item: { projectid: number }) => item.projectid == 12);
      })

  }

  obtenerProyecto(){
    let x: number = this.route.snapshot.params['id'];
    this.__getProjectById(x);
    console.log(x);
  }



}