import { Injectable } from '@angular/core';
import { User } from '../model/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  loggedIn: User = null;
  data = {
    about: 'System Service',
    user: {
      loggedIn: false,
      instance: null
    }
  };

  constructor(private router: Router) { }

  isAdmin(): boolean {
    return (this.loggedIn == null) ? false : this.loggedIn.Admin;
  }

  isReviewer(): boolean {
    return (this.loggedIn == null) ? false : this.loggedIn.Reviewer;
  }

  checkLogin(): void {
    // if (this.loggedIn == null) {
    //   this.router.navigateByUrl("/users/login");
    // }
  }
}
