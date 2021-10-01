import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { ServicioService } from 'src/app/services/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


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
    projectDescription: ['', Validators.required],
    projectType: ['', Validators.required],
    projectPhase: ['', Validators.required],
    initDate: ['', Validators.required],
    endDate: ['', Validators.required]

  })

  companies: any = [];
  services: any = [];

  constructor(private fb: FormBuilder,
              private readonly cs: CompanyService,
              private readonly ss: ServicioService,
              private router: Router){ }
  
  obtenerEmpresas() {
    this.cs.getCompanies().subscribe((rest: any) => {
      console.log(rest.data);
      this.companies = rest.data;
      
    })
  }

  obtenerServicios() {
    this.ss.getServices().subscribe((rest: any) => {
      console.log(rest.data);
      this.services = rest.data;
    })
  }

  __onSubmit(){
    if(this.projectForm.valid){
      console.log(this.projectForm.value);
      Swal.fire({ icon: 'success', title: 'Proyecto ingresado con éxito', showConfirmButton: false, timer: 2500 });
      this.router.navigate(['admin/project/list/0']);
    }else{

      Swal.fire({ icon: 'error', title: 'Por favor complete todos los datos obligatorios', text: 'datos no válidos' });
    }


  }

  ngOnInit(): void {
    this.obtenerEmpresas();
    this.obtenerServicios();
  }

}
