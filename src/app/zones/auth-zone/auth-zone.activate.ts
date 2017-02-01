import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../../components/account/auth.service";

@Injectable()
export class AuthZoneActivateService implements CanActivate {
  constructor(private auth: AuthService, private  router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let isAuthorized: Observable<boolean>;

    isAuthorized = new Observable((observer) => {
      this.auth.isAuth().subscribe((auth) => {
        console.log('auth-zone:',auth);
        if (auth) {
          console.log('redirect to dashboard');
          this.router.navigate(['dashboard'])
        }
        observer.next(!auth);
      })
    });


    return isAuthorized;
  }
}
