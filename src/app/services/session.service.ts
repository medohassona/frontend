import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  setSession(token: string) {
    localStorage.setItem('session_token', token);
  }

  getSession() {
    return localStorage.getItem('session_token');
  }

  clearSession() {
    localStorage.removeItem('session_token');
  }
}
