import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  projectForm = this.fb.group({
    company: ['', Validators.required],
    area: ['', Validators.required],
    projectManager: ['', Validators.required],
    service: ['', Validators.required],
    projectName: ['', Validators.required],
    projectType: ['', Validators.required],
    projectPhase: ['', Validators.required],
    initDate: ['', Validators.required]

  })

  constructor(private fb: FormBuilder) { }

  __onSubmit(){
    if(this.projectForm.valid){
      console.log(this.projectForm.value);
    }else{
      alert('Formulario no válido');
    }


  }

  ngOnInit(): void {
  }

}
