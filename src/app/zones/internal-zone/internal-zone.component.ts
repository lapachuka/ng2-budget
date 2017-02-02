import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../../components/profile/auth.service";

@Component({
  selector: 'auth-zone',
  templateUrl: './internal-zone.html'
})

export class InternalZoneComponent {
  subscriber:any;
  constructor(private auth: AuthService, private  router: Router) {
    this.subscriber = this.auth.isAuthNot().subscribe((auth) => {
      console.log('internal zone:', auth);
      if (auth) {
        this.router.navigate(['sign-in'])
      }
    });
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
