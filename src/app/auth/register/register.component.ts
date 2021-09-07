import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReCaptcha2Component } from 'ngx-captcha';
import { Client } from 'src/app/models/client';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  aFormGroup: FormGroup;
  client: Client;
  sitekey: string = "6LfHukccAAAAANl68zGFUxZZyKoxfPxag9n3MFLb";

  ngOnInit() {
    this.aFormGroup = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      conditions: [false, Validators.required],
      recaptcha: ['', Validators.required]
    });
  }

  constructor(private fb: FormBuilder,
    private router: Router) { }

  __onSubmit() {
    if (this.aFormGroup.valid && this.aFormGroup.value.conditions == true) {
      console.log(this.aFormGroup.value);
      this.aFormGroup.reset();
      //window.location.reload();   
      
      Swal.fire({ icon: 'success', title: 'Te has registrado con éxito', showConfirmButton: true, timer: 2500 });
    } else if (this.aFormGroup.valid && this.aFormGroup.value.conditions == false) {
      Swal.fire({ icon: 'error', title: null, text: 'Debe aceptar los términos y condiciones' });
    } else {
      Swal.fire({ icon: 'error', title: 'Datos incorrectos', text: 'datos no válidos' });
    }

  }



}
