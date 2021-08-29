import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  comments: any = [];

  constructor(private readonly cs: CommentService) { }

  obtenerComentarios() {
    this.cs.getComments().subscribe((rest: any) => {
      console.log(rest.data);
      this.comments = rest.data;
    })
  }

  ngOnInit(): void {
    this.obtenerComentarios();
  }

}
