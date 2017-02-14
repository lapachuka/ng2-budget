import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../../components/profile/auth.service";

@Injectable()
export class InternalZoneActivateService implements CanActivate {
  constructor(private auth: AuthService, private  router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    //return this.auth.isAuth();
    let isAuthorized: Observable<boolean>;

    isAuthorized = new Observable((observer) => {
      this.auth.isAuth().subscribe((auth) => {
        if (!auth) {
          this.router.navigate(['/sign-in']);
        }
        observer.next(!!auth);
      });
    });

    return isAuthorized;
  }
}
