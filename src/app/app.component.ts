import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontApp';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'ar']);
    const browserLang = this.translate.getBrowserLang();
    if (browserLang != null) {
      const defaultLang = ['en', 'ar'].includes(browserLang) ? browserLang : 'en';
      this.translate.use('ar');
    }

  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
