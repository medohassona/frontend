import { Component, OnInit, AfterViewInit } from '@angular/core';
import { loadStripe, Stripe, StripeCardElement } from '@stripe/stripe-js';
import {PaymentService} from "../services/account/payment.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, AfterViewInit {
  private stripe: Stripe | null = null;
  private card: StripeCardElement | null = null;
  private clientSecret: string | null = null;

  constructor(private paymentService: PaymentService) {}

  async ngOnInit() {
    this.stripe = await loadStripe('pk_test_51PQcXCRos6dKvqEAhceZ7vipFwUsGokDdoe28pS2O9lrlpRDiCIHremhWTmdlTZPGdChJuOaC96UrOUrVdNCu6ma00v42HcXS5');
    this.paymentService.createPaymentIntent().then((data) => {
      // @ts-ignore
      this.clientSecret = data.clientSecret;
    });
  }

  ngAfterViewInit() {
    if (this.stripe) {
      const elements = this.stripe.elements();
      this.card = elements.create('card');
      this.card.mount('#card-element');
      this.card.on('change', (event) => {
        const displayError = document.getElementById('card-errors');
        if (event.error) {
          displayError!.textContent = event.error.message;
        } else {
          displayError!.textContent = 'success';
        }
      });
    }
  }

  async handlePayment() {
    if (this.stripe && this.card && this.clientSecret) {
      const { error, paymentIntent } = await this.stripe.confirmCardPayment(this.clientSecret, {
        payment_method: {
          card: this.card,
          billing_details: {
            // Optionally include additional billing details here
            name: 'Customer Name',
          },
        },
      });

      if (error) {
        document.getElementById('payment-result')!.textContent = <string>error.message;
      } else if (paymentIntent) {
        document.getElementById('payment-result')!.textContent = 'Payment successful!';
        // Handle account activation here
      }
    }
  }
}
