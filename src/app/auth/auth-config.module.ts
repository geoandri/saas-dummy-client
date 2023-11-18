import { NgModule } from '@angular/core';
import {AuthModule, LogLevel} from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'http://127.0.0.1:8080',
            redirectUrl: window.location.origin + '/home',
            postLogoutRedirectUri: window.location.origin,
            clientId: 'public-client',
            scope: 'openid profile', // 'openid profile ' + your scopes
            responseType: 'code',
            silentRenew: true,
            silentRenewUrl: window.location.origin + '/silent-renew.html',
            renewTimeBeforeTokenExpiresInSeconds: 10,
            logLevel: LogLevel.Debug,
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
