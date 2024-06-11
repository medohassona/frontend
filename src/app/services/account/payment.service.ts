import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:8090';
  private stripePromise = loadStripe(environment.stripeKey);

  constructor(private http: HttpClient) {}

  async createPaymentIntent() {
    return this.http.post<{clientSecret: string}>(`${this.apiUrl}/api/payment/payment-intent`, {}).toPromise();
  }

  async confirmPayment(clientSecret: string, paymentMethod: any) {
    const stripe = await this.stripePromise;
    return stripe?.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod
    });
  }
}
