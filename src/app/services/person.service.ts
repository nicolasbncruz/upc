import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private readonly http: HttpClient) { }

  getPersons() {
    return this.http.get('/api/persons');
  }
}
