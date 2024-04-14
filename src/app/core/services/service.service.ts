import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:3000/services';

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiUrl);
  }

  getServiceById(id: number): Observable<Service> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Service>(url);
  }

  addService(service: Service): Observable<Service> {
    return this.http.post<Service>(this.apiUrl, service);
  }

}
