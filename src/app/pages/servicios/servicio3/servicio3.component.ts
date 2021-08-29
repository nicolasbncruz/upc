import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-servicio3',
  templateUrl: './servicio3.component.html',
  styleUrls: ['./servicio3.component.css']
})
export class Servicio3Component implements OnInit {

  contactusForm =this.fb.group({
    nombre:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    numero:['',[Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    mensaje:['', Validators.required]
  })
  constructor(private fb: FormBuilder) { }

  __onSubmit() {
    if(this.contactusForm.valid) {
      console.log(this.contactusForm.value);
      alert('Se envió el formulario')
    }else{
      alert('Formulario no válido');
    }

    
  }
  ngOnInit(): void {
  }

}
