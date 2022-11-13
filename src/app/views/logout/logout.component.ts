import { Component, OnInit } from '@angular/core';
import { CookieService } from "../../services/cookie/cookies.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.cookieService.deleteCookie('USER_SESSION');
    await this.router.navigate(['']);
  }
}
