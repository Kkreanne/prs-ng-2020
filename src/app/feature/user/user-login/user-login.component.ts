import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent extends BaseComponent implements OnInit {
  message: any;
  title: string = "Login";
  user: User = new User();

  constructor(private userSvc: UserService, 
              protected sysSvc: SystemService, 
              private router: Router) {
    super(sysSvc);
  }

  ngOnInit() {
    this.user.username = 'kabrams';
    this.user.password = 'kreanne7';
  }

  login() {
    this.userSvc.login(this.user).subscribe(jRes => {
      if (jRes.errors == null) {
        this.user = jRes.data as User;
        this.sysSvc.loggedIn = this.user;
        this.router.navigateByUrl('home');
      } else {
        this.message = jRes.errors;
      }
    });
  }

}
