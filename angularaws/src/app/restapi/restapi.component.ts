import { Component, OnInit } from '@angular/core';
import { AuthorizationService} from "../shared/authorization.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

export class PersonWithCars {
  constructor(public name: string, public age: number) { }
}

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent implements OnInit {

  _data : any;

  constructor(private http: HttpClient, private auth: AuthorizationService) { }

  ngOnInit() {
    var authenticatedUser = this.auth.getAuthenticatedUser();
    if (authenticatedUser == null) {
      return;
    }
    authenticatedUser.getSession( (err, session) => {
      if (err) {
        console.log(err);
        return;
      }
      const token = session.getIdToken().getJwtToken();
      const headers = new HttpHeaders();
      headers.append('Authorization', token);
      var that = this;
      this.auth.getAuthenticatedUser().getSession((err, session) => {
        if (err) {
          console.log(err);
          return;
        }
        const token = session.getIdToken().getJwtToken();
        const headers = new HttpHeaders();
        headers.append('Authorization', token);
        console.log(token);
        this.http.get('https://xmkhfiev86.execute-api.us-east-1.amazonaws.com/dev/getdetail',  { headers: headers })
          .subscribe(
          response => {
            that._data = response;
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
      });
    });
  }

}
