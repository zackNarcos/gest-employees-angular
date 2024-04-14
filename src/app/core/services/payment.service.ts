import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PaymentDetails} from "../models/payment-details.model";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:3000/payments';

  constructor(private http: HttpClient) {}

  makePayment(paymentDetails: PaymentDetails): Observable<PaymentDetails> {
    return this.http.post<PaymentDetails>(this.apiUrl, paymentDetails);
  }

}
