import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../../providers/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],

})
export class LoginFormComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  form_login(f: NgForm) {

    if (!f.valid) {
      return;
    }

    this.authService.login(f.controls.email.value, f.controls.senha.value)
    f.controls.email.setValue('');
    f.controls.senha.setValue('');

  }

}
