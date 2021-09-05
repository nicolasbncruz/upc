import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aFormGroup: FormGroup;
  client: Client;
  sitekey: string = "6LfHukccAAAAANl68zGFUxZZyKoxfPxag9n3MFLb";

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      recaptcha: ['', Validators.required]
    });
  }

  __onSubmit() {
    if (this.aFormGroup.valid) {
      console.log(this.aFormGroup.value);
      Swal.fire({ icon: 'success', title: 'Te has logueado con éxito', showConfirmButton: false, timer: 1500 });
      // Swal.fire({ icon: 'success', title: 'Te has logueado con éxito', showConfirmButton: true });
      this.router.navigate(['estadistica']);
    } else {
      Swal.fire({ icon: 'error', title: 'Por favor llene sus datos correctamente', text: 'datos no válidos' });
    }
  }



}
