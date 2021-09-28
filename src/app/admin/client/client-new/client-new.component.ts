import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.css']
})
export class ClientNewComponent implements OnInit {


  selectTipoDoc: string;

  listTipoDoc = [
    {id: '01', name: 'DNI'},
    {id: '02', name: 'CARNET DE EXT.'},
    {id: '03', name: 'PASAPORTE'}
  ];

  clienteForm = this.fb.group({
    empresa: this.fb.group({
      textRUC: ['', Validators.required],
      textRazonSocial: ['', Validators.required],
      textEmail: ['', Validators.required]
    }),
    textNombre: ['', [Validators.required]],
    textApePaterno: ['', [Validators.required]],
    textApeMaterno: ['', [Validators.required]],
    textTipoDoc: ['', [Validators.required]],
    textNumeroDoc: ['', [Validators.required]],
    textEmailContacto: ['', [Validators.required, Validators.email]],
    textTelfCelular: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private router: Router          
    ) { }

  __onSubmit() {
    if(this.clienteForm.valid) {
      console.log(this.clienteForm.value);
      Swal.fire({ icon: 'success', title: 'Cliente ingresado con éxito', showConfirmButton: false, timer: 2500 });
      this.router.navigate(['admin/client/list']);
    }else{

      Swal.fire({ icon: 'error', title: 'Por favor complete todos los datos obligatorios', text: 'datos no válidos' });
    }
  }

  __onClear() {
    this.clienteForm.reset();
  }



  ngOnInit(): void {
  }

}
