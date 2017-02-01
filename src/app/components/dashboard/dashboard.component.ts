import {Component} from "@angular/core";
import {HttpClient} from "../../shared/services/http.client";

@Component({
  templateUrl: "./dashboard.html",
  styleUrls: ["./dashboard.scss"]
})

export class DashboardComponent {
  constructor(private http: HttpClient) {
    this.http = http;

    /*this.http.get('http://localhost:8742/user/profile')
      .subscribe( resp => console.log(resp));*/

  }
}
