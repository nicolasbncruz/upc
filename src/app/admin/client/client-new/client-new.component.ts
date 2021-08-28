import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.css']
})
export class ClientNewComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
