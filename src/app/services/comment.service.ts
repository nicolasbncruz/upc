import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private readonly http: HttpClient) { }

  getComments() {
    return this.http.get('/api/comments');
  }
}
