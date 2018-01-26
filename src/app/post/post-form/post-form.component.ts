import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  autor: string;
  constructor(private angularFire: AngularFireDatabase, afAuth: AngularFireAuth) {
    this.autor = afAuth.auth.currentUser.displayName
  }

  ngOnInit() {
  }
  form_submit(f: NgForm) {
    this.angularFire.list("posts").push(
      {
        autor: this.autor,
        mensagem: f.controls.mensagem.value
      }
    ).then((t) => {
      console.log(t);
      f.controls.mensagem.setValue('');

    }, (e: any) => console.log(e.message));
  }
}
