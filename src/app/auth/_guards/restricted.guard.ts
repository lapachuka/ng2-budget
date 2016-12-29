import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from "../services/auth-service";

@Injectable()
export class RestrictedGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router) {
  }

  canActivate() {
    if (this.auth.authenticated) {
      this.router.navigate(['/dashboard']);
    }

    return !this.auth.authenticated;
  }
}
