import {Component} from '@angular/core';
import {Login} from './login.model'
import {AuthService} from '../../services/auth-service';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'app/auth/components/login/login.html',
  styleUrls: ['app/auth/components/login/style.css']
})

export class LoginComponent {
  login:Login = {
    password: '',
    email: ''
  };

  errorMsg:String = '';

  constructor(private auth:AuthService, private router:Router) {

  }

  onSubmit() {
    console.log(this.login);
    this.auth.login(this.login)
      .subscribe(
        (resp) => this.router.navigate(['dashboard']), //Bind to view
        err => {
          // Log errors if any
          this.errorMsg = err.message;
          console.log(err);
        });
  }

  private postSignIn():void {
    this.router.navigate(['/members']);
  }

}
