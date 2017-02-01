import { Component } from '@angular/core';
import {AuthService} from "../../components/profile/auth.service";

@Component({
    selector: 'top-nav',
    templateUrl: './topnav.html',
})

export class TopNavComponent {
  constructor(private auth: AuthService){
    this.auth = auth;
  }

  logout(){
    console.log('logout');
    this.auth.signOut();
  }
}
