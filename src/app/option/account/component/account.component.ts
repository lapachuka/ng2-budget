import {Component} from "@angular/core";
import {HttpClient} from "../../../auth/services/http.client"
import {AccountService} from '../services/account.service';
import {Router} from '@angular/router';



@Component({
  templateUrl: './account.html',
  styleUrls: ['./account.scss']
})

export class AccountComponent {
  errorMsg:String = '';

  constructor(private account:AccountService, private router:Router) {
    this.account.getList()
      .subscribe(
        (resp) => console.log(resp),
        err => {
          // Log errors if any
          this.errorMsg = err.message;
          console.log(err);
        });
  }
}
