import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import {NgForm} from "@angular/forms";

// import { moveIn } from '../../router.animations';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  // animations: [moveIn()],
  // host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {
  state = '';
  error: any;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onSubmit(f: NgForm){
    if(f.valid){
      var email = f.controls.email.value;
      var senha = f.controls.senha.value;
      this.afAuth.auth.createUserWithEmailAndPassword(
        email,
        senha
      ).then(
        (sucess) => {
        console.log(sucess);
        sucess.updateProfile({
          displayName: f.controls.nome.value
        });
        this.router.navigate(['/login']);
      }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        });

    }
  }

}
