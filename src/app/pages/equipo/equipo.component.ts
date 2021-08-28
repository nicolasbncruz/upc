import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  persons: any = [];

  constructor(private readonly ps: PersonService) { }

  obtenerPersonas() {
    this.ps.getPersons().subscribe((rest: any) => {
      console.log(rest.data);
      this.persons = rest.data;
    })
  }

  ngOnInit(): void {
    this.obtenerPersonas();
  }

}
