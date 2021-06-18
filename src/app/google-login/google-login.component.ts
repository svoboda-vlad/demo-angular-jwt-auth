import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { CurrentUserService } from '../current-user/current-user.service';
import { GoogleLoginService, IdTokenGoogle } from './google-login.service';

@Component({
  selector: 'daja-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent implements OnInit {

  accessTokenKey = "access_token";
  googleLoginError = false;
  googleLoginSubscription: Subscription;

  constructor(private router: Router,
    private googleLoginService: GoogleLoginService,
    private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    let accessToken = "";
    let idToken = "";
    const hashParams = location.hash.replace("#","").split("&");
    hashParams.forEach((param) => {
      const p = param.split("=");
      if (p[0] == "access_token") accessToken = p[1];
      if (p[0] == "id_token") idToken = p[1];
    });
    localStorage.setItem(this.accessTokenKey, accessToken);
    const idTokenGoogle: IdTokenGoogle = new IdTokenGoogle(idToken);

    this.googleLoginSubscription = this.googleLoginService
      .logIn(idTokenGoogle)
      .pipe(
        concatMap(() => this.currentUserService.getCurrentUser())
      ).subscribe(() => {
        this.googleLoginError = false;
        this.router.navigate(['']);
      },
      () => this.googleLoginError = true);

  }

}