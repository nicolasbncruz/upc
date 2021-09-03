import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MilestoneService {

  constructor(private readonly http: HttpClient) { }

  getMilestones() {
    return this.http.get('/api/milestones');
  }
}