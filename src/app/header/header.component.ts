import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/auth/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn = false;

  constructor(public loginService: AuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.loginService.isUserLoggedIn();
  }

}
