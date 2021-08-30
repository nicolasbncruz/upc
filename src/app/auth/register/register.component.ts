import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required]

  });

  constructor(private fb: FormBuilder) { }

  __onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      alert('Formulario no valido')
    }
  }

  ngOnInit(): void {
  }

}
