import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  httpHeaders = new HttpHeaders({'content-type': 'application/json ; charset=utf-8'});

  constructor(private http: HttpClient) { }

  registerUser(userData): Observable<any> {
    return this.http.post(' https://bljprl8lq1.execute-api.us-east-1.amazonaws.com/dev/writedetail', userData);
  }

}
