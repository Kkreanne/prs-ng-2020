import { Injectable } from '@angular/core';
import { User } from '../model/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  loggedIn: User = null;

  constructor(private router: Router) { }

  isAdmin(): boolean {
    return (this.loggedIn == null) ? false : this.loggedIn.admin;
  }

  isReviewer(): boolean {
    return (this.loggedIn == null) ? false : this.loggedIn.reviewer;
  }

  checkLogin(): void {
    // if (this.loggedIn == null) {
    //   this.router.navigateByUrl("/users/login");
    // }
  }
}
