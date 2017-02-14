import {Component} from "@angular/core";
import {AuthService} from "../../components/profile/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'auth-zone',
  templateUrl: './auth-zone.html'
})

export class AuthZoneComponent {
  subscriber:any;

  constructor(private auth: AuthService, private  router: Router) {

    this.subscriber = this.auth.isAuth().subscribe((auth) => {
      console.log('auth-zone:', auth);
      if (auth) {
        this.router.navigate(['dashboard'])
      }
    });
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

}
