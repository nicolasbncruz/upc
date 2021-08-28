import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.css']
})
export class ClientNewComponent implements OnInit {

  clientForm = this.fb.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    address: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  __onSubmit(){
    if(this.clientForm.valid){
      console.log(this.clientForm.value);
    }else{
      alert('Formulario no válido');
    }


  }

  ngOnInit(): void {
  }

}
