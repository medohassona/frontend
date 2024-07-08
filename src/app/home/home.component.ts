import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TemplateHelperService} from "../services/template-helper.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private templateHelper: TemplateHelperService, private router: Router) {}

  ngOnInit() {
    this.templateHelper.triggerDOMContentLoaded();
  }
  startChat(userId: number) {
    // this.router.navigate(['/chat'], { queryParams: { userId } });
  }
}
