import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { ServicioService } from 'src/app/services/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  projectForm = this.fb.group({
    descripcion: ['', Validators.required],
    tipoProyecto: ['', Validators.required],
    idEmpresa: [0, Validators.required],
    jefeProyecto: ['', Validators.required],
    idServicio: [0, Validators.required],
    fechaInicioPlan: ['', Validators.required],
    fechaInicioReal: ['', Validators.required],
    fechaFinPlan: ['', Validators.required],
    fechaFinReal: ['', Validators.required],
    imagenProyecto: ['', Validators.required],
    areaEmpresa: ['', Validators.required],
    nombreProyecto: ['', Validators.required]

  })

  companies: any = [];
  services: any = [];

  constructor(private fb: FormBuilder,
              private readonly cs: CompanyService,
              private readonly ss: ServicioService,
              private readonly ps: ProjectService,
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

  __insert(data:any){
    this.ps.insertProjects(data).subscribe((rest:any) => {
      if(rest.isSuccess){
        Swal.fire({ icon: 'success', title: 'Proyecto creado con id: ' + rest.data.id, showConfirmButton: false, timer: 2500 });
        this.router.navigate(['admin/project/list/0']);
      } else {
        Swal.fire({ icon: 'error', title: 'Error al insertar', text: 'Ocurrió un Error' });
      }
    })
  }

  __onSubmit(){
    if(this.projectForm.valid){
      //console.log(this.projectForm.value);
      //Swal.fire({ icon: 'success', title: 'Proyecto ingresado con éxito', showConfirmButton: false, timer: 2500 });
      //this.router.navigate(['admin/project/list/0']);
      this.__insert(this.projectForm.value);
    }else{

      Swal.fire({ icon: 'error', title: 'Por favor complete todos los datos obligatorios', text: 'datos no válidos' });
    }


  }

  ngOnInit(): void {
    this.obtenerEmpresas();
    this.obtenerServicios();
  }

}
