import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private readonly http: HttpClient) { }

  getCompanies() {
    return this.http.get('http://190.232.24.126/api/company/getcompanies');
  }
}
