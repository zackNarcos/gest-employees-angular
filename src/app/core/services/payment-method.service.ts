import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentMethod } from '../models/payment-method.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  private apiUrl = 'http://localhost:3000/paymentMethods';

  constructor(private http: HttpClient) {}

  getAllPaymentMethods(): Observable<PaymentMethod[]> {
    return this.http.get<PaymentMethod[]>(this.apiUrl);
  }

  getPaymentMethodById(id: number): Observable<PaymentMethod> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<PaymentMethod>(url);
  }

}
