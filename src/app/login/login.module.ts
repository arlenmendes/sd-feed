import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {FormsModule} from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import {AuthService} from '../providers/auth.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LoginComponent, LoginFormComponent, SignupComponent],
  exports: [LoginComponent, LoginFormComponent],
  providers: [AngularFireAuth, AuthService]
})
export class LoginModule { }
