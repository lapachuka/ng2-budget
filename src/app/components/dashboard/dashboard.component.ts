import {Component} from "@angular/core";
import {HttpClient} from "../../shared/services/http.client";
import {AccountService} from "../option/account/services/account.service";

@Component({
  templateUrl: "./dashboard.html",
  styleUrls: ["./dashboard.scss"]
})

export class DashboardComponent {
  accounts = [];

  constructor(private http: HttpClient, public Account: AccountService) {
    this.http = http;


    Account.getList()
      .subscribe((resp) => {
        this.accounts = resp.data;
        console.log(resp);
      });
    /*this.http.get('http://localhost:8742/user/profile')
     .subscribe( resp => console.log(resp));*/

  }
}
