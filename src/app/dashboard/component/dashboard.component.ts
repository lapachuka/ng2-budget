import {Component} from "@angular/core";
import {HttpClient} from "../../auth/services/http.client"

@Component({
  templateUrl: "./dashboard.html",
  styleUrls: ["./dashboard.scss"]
})

export class DashboardComponent {
  constructor(private http: HttpClient) {
    this.http = http;

    this.http.get('http://localhost:8742/user/profile')
      .subscribe( resp => console.log(resp));
    console.log('hello dashboard');
  }
}
