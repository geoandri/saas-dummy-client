import {Component, OnInit} from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public oidcSecurityService: OidcSecurityService) {
  }

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({isAuthenticated}) => {
          if (!isAuthenticated) {
            this.oidcSecurityService.authorize();
          }
        }
      );

  }

  logout() {
    console.log('app logoff');
    this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
  }

  printAccessToken() {
    this.oidcSecurityService.getAccessToken().subscribe(at => console.log(at));
  }

}
