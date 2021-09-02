import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  contactusForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
    private router: Router) { }

  __onSubmit() {
    if (this.contactusForm.valid) {
      console.log(this.contactusForm.value);
      Swal.fire({ icon: 'success', title: 'Te has logueado con éxito', showConfirmButton: false, timer: 1500 });
      // Swal.fire({ icon: 'success', title: 'Te has logueado con éxito', showConfirmButton: true });
      this.router.navigate(['dashboard']);
    } else {
      Swal.fire({ icon: 'error', title: 'Por favor llene sus datos correctamente', text: 'datos no válidos' });
    }
  }

  ngOnInit(): void {
  }

}
