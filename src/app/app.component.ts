import { Component } from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public oidcSecurityService: OidcSecurityService) {}
  title = 'saas-dummy-client';

  ngOnInit() {
  }


}
