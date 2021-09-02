import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { ServicioService } from 'src/app/services/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-service',
  templateUrl: './detalle-service.component.html',
  styleUrls: ['./detalle-service.component.css']
})
export class DetalleServiceComponent implements OnInit {
  constructor(private readonly ps: ProjectService,
    private readonly ss: ServicioService,
    private ar: ActivatedRoute,
    private fb: FormBuilder) { }
  projects: any = [];
  service: any = [];

  contactusForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    numero: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    mensaje: ['', Validators.required]
  })

  __onSubmit() {
    if (this.contactusForm.valid) {
      console.log(this.contactusForm.value);
      Swal.fire({ icon: 'success', title: 'Te has registrado con éxito', showConfirmButton: true });
      this.contactusForm.reset();
    } else {
      Swal.fire({ icon: 'error', title: 'Datos incorrectos', text: 'datos no válidos' });
    }
  }


  getServiceById(id: number) {
    this.ss.getServices().subscribe((rest: any) => {
      this.service = rest.data.filter((item: { id: number }) => item.id == id);
      console.log(this.service);
    })
  }
  getProjectsByServiceId(id: number) {
    this.ps.getProjects().subscribe((rest: any) => {
      this.projects = rest.data.filter((item: { serviceId: number }) => item.serviceId == id);
      console.log(this.projects);
    })
  }

  ngOnInit(): void {
    this.ar.params.subscribe((params: Params) => {
      if (params.id) {
        this.getServiceById(params.id);
        this.getProjectsByServiceId(params.id);
      }
    })
  }
}

