import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthApiService, UserLoginDto } from "../../services/auth/auth.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CookieService } from "../../services/cookie/cookies.service";
import LoginMessages from "../../helpers/messages/login";
import { UserLoginDtoConverter } from "../../helpers/model-converters/user-login-dto";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  requestLoading = false;
  authError = '';

  loginForm = new FormGroup({
    email: new FormControl<string | null>(null, [
      Validators.required, Validators.email
    ]),
    password: new FormControl<string | null>(null, [
      Validators.required, Validators.minLength(8)
    ])
  });

  constructor(
    private authApi: AuthApiService,
    private cookieService: CookieService,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const model = UserLoginDtoConverter.convertFormGroup(this.loginForm);

    this.cleanAuthError();
    this.requestLoading = true;

    this.authApi.authorizeUser(model)
      .subscribe({
        next: async response => {
          this.cookieService.setCookie("USER_SESSION", response.result)
          await this.router.navigate([''])
        },
        error: error => {
          console.error(error);
          this.authError =  error.status === 400 ? LoginMessages.USER_NOT_FOUND : LoginMessages.SERVER_ERROR;
        },
      })
      .add(() => {
        this.requestLoading = false;
        this.changeDetector.detectChanges();
      });
  }

  cleanAuthError(): void {
    this.authError = '';
  }
}
