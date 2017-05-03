import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../../shared/services/auth.service';
import {LoginData} from '../../../shared/models/login-data.model';

@Component({
  selector: 'ngs-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private _auth: AuthService, private _router: Router) {
    this._auth.isLoggedIn().subscribe(isLoggedIn => isLoggedIn && this._router.navigateByUrl('/'));
  }

  onLogin(payload: LoginData) {
    this._auth.login(payload).subscribe(r => this._router.navigateByUrl('/'));
  }
}
