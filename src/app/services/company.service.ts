import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private readonly http: HttpClient) { }

  getCompanies() {
    return this.http.get('/api/companies');
  }
}
