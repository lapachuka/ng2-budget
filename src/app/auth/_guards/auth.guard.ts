import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from "../services/auth-service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router) {
  }

  canActivate() {
    console.log('can acrive loading');

    if (!this.auth.authenticated) {
      this.router.navigate(['/']);
    }

    return this.auth.authenticated;
  }
}
