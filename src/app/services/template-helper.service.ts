import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateHelperService {

  constructor() { }

  triggerDOMContentLoaded() {
    const event = new Event('DOMContentLoaded', {
      bubbles: true,
      cancelable: true
    });
    document.dispatchEvent(event);
  }
}
