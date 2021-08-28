import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-servicio1',
  templateUrl: './servicio1.component.html',
  styleUrls: ['./servicio1.component.css']
})
export class Servicio1Component implements OnInit {

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
