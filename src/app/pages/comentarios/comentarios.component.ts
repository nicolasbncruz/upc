import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  listaTestimonios: any[] = [
    {
      rating: 5,
      comentario: 'Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.',
      imagen: 'assets/img/testimonial-1.jpg',
      nombre: 'Ena Shah',
      empresa: 'Teacher at Abc School'
    },
    {
      rating: 4,
      comentario: 'Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.',
      imagen: 'assets/img/testimonial-2.jpg',
      nombre: 'Mrs. Gosh',
      empresa: 'Actor'
    },
    {
      rating: 5,
      comentario: 'Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.',
      imagen: 'assets/img/testimonial-3.jpg',
      nombre: 'John Doe',
      empresa: 'Model'
    },
    {
      rating: 5,
      comentario: 'Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.',
      imagen: 'assets/img/testimonial-4.jpg',
      nombre: 'Jonathan Smith',
      empresa: 'Creative Designer'
    },
    {
      rating: 4,
      comentario: 'Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.',
      imagen: 'assets/img/testimonial-1.jpg',
      nombre: 'Sara A. K.',
      empresa: 'Heroine'
    },
    {
      rating: 5,
      comentario: 'Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.',
      imagen: 'assets/img/testimonial-2.jpg',
      nombre: 'David Smith',
      empresa: 'Businessman'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
