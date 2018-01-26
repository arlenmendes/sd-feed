import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  public login(email: string, senha: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, senha)
      .then(ok => {
        this.router.navigate(['/feed']);
      });
  }

  public logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  public estaLogado() {
    var user = this.afAuth.auth.currentUser;
    if (user){
      return true;
    } else {
      return false;
    }
  }

  public buscarNome() {
    return this.afAuth.auth.currentUser.displayName
  }

}
