import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accounts } from 'meteor/accounts-base';
import { InjectUser } from 'angular2-meteor-accounts-ui';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@InjectUser('user')
export class LoginComponent implements OnInit {
  user: Meteor.User;
  email: string;
  password: string;
  error: string;

  constructor(private router: Router) {}

  ngOnInit() {
    if(!!this.user)
      this.router.navigateByUrl('/gestionEquipe');
  }

  onRegister() {
    Accounts.createUser({ email: this.email, password: this.password }, err => {
      if (err) {
        this.error = err.reason;
      } else {
        this.router.navigateByUrl('/gestionEquipe');
      }

      this.email = '';
      this.password = '';
    });
  }

  onLogin() {
    Meteor.loginWithPassword(this.email, this.password, err => {
      if(err) {
        this.error = err.reason;
      } else {
        this.router.navigateByUrl('/gestionEquipe');
      }

      this.email = '';
      this.password = '';
    })
  }
}

