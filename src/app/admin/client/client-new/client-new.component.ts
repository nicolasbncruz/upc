import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    textNombre: ['', [Validators.required]],
    textApePaterno: ['', [Validators.required]],
    textApeMaterno: ['', [Validators.required]],
    textTipoDoc: ['', [Validators.required]],
    textNumeroDoc: ['', [Validators.required]],
    textEmailContacto: ['', [Validators.required, Validators.email]],
    textTelfCelular: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  __onSubmit() {
    if(this.clienteForm.valid) {
      console.log(this.clienteForm.value);
    } else {
      alert('Formulario no valido');
    }
  }

  __onClear() {
    this.clienteForm.reset();
  }



  ngOnInit(): void {
  }

}
