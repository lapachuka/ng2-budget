import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "./components/profile/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private auth: AuthService, private router: Router){
    this.auth = auth;
    this.router = router;
  }

  logout(){
    this.auth.signOut();
    this.router.navigate([''])
  }
}
