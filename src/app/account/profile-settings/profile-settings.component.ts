import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {TemplateHelperService} from "../../services/template-helper.service";

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit{
  constructor(private templateHelper: TemplateHelperService, protected authService: AuthService) {}

  ngOnInit() {
    this.templateHelper.triggerDOMContentLoaded();
  }
}
