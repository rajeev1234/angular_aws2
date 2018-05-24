import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {AuthorizationService} from "../shared/authorization.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css'],
  providers: [UserService]
})
export class PostdetailComponent implements OnInit {
  register;
  constructor(private userService: UserService,
              private http: HttpClient,
              private auth: AuthorizationService) {}

  ngOnInit() {
      var authenticatedUser = this.auth.getAuthenticatedUser();
    if (authenticatedUser == null) {
      return;}
    this.register = {
      // date: '',
      message: '',
      body: '',

    };
  }
  registerUser() {
    this.userService.registerUser(this.register).subscribe(
      responce => {
        console.log('responce' , responce);
        localStorage.setItem('username3', this.register.username);
        // this.global.me = responce['user'];
        // console.log('token', responce['token']);
        // console.log();
        // this.router.navigate(['/login']);
      },
      error => console.log('error', error )
    );
  }


}
