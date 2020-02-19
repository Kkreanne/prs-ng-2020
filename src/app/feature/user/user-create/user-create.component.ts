import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: '..//user-maint-shared/user-maint.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  title: string = 'Create New User';
  submitBtnTitle: string = 'Create';
  user: User = new User();

  constructor(private userSvc: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.userSvc.create(this.user).subscribe(jRes => {
      let errs: string = jRes.errors;
      if (errs!=null) {
        console.log("Error creating user: "+errs);
      }
      this.router.navigateByUrl('/user/list');
    });
  }

  backClicked() {
    history.back();
  }
}
