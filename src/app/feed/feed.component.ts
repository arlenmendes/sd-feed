import { Component, OnInit } from '@angular/core';
import {AuthService} from '../providers/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  email: any;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.email = this.authService.buscarNome()
  }

  ngOnInit() {

  }

  logout(){
    this.authService.logout();
  }

}
