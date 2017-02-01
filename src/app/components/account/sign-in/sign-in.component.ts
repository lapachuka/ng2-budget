import {Component} from '@angular/core';
import {Login} from './sign-in.model'
import {Router} from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
  selector: 'login-cmp',
  templateUrl: './sign-in.html'
})

export class SignInComponent {
  login:Login = {
    password: '',
    email: ''
  };

  errorMsg:String = '';

  constructor(private auth:AuthService, private router:Router) {

  }

  onSubmit() {
    this.auth.login(this.login)
      .subscribe(
        //(resp) => this.router.navigate(['dashboard']), //Bind to view
        err => {
          // Log errors if any
          this.errorMsg = err.message;
        });
  }

  private postSignIn():void {
    this.router.navigate(['/members']);
  }

}
