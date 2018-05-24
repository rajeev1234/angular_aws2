import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {AuthorizationService} from "../shared/authorization.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css'],
  providers: [UserService]
})
export class UserdetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
