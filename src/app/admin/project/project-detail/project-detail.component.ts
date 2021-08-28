import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

}
