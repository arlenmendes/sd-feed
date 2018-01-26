import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-post-lista',
  templateUrl: './post-lista.component.html',
  styleUrls: ['./post-lista.component.css']
})
export class PostListaComponent implements OnInit {
  posts: Observable<any[]>
  constructor(db: AngularFireDatabase) {
    this.posts = db.list("posts").valueChanges().map((array) => array.reverse()) as Observable<any[]>;
  }

  ngOnInit() {
  }

}
