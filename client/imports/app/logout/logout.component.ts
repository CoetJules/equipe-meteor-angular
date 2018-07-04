import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InjectUser } from 'angular2-meteor-accounts-ui';


@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
@InjectUser('user')
export class LogoutComponent {
  user: Meteor.User;

  constructor(private router: Router) {}

  onLogout() {
    Meteor.logout(err => {
      if(err)
        console.log(err);
      else
        this.router.navigateByUrl('/');
    })
  }
}

