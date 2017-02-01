import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../../components/account/auth.service";

@Injectable()
export class InternalZoneActivateService implements CanActivate {
  constructor(private auth: AuthService, private  router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let isAuthorized: Observable<boolean>;

    isAuthorized = new Observable((observer) => {
      console.log('here');
      this.auth.testAuth.subscribe((auth) => {
        console.log('internal-zone auth state:', auth);
        if (!auth) {
          console.log('redirect to sign-in');
          this.router.navigate(['sign-in'])
        }
        observer.next(auth);
      })
    });


    return isAuthorized;
  }
}
