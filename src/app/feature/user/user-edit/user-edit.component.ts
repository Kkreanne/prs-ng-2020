import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: '..//user-maint-shared/user-maint.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  title: string = 'User Edit';
  submitBtnTitle: string = 'Save';
  user: User = new User();
  id: number = 0;

  constructor(private userSvc: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.userSvc.get(this.id).subscribe(jRes => {
      this.user = jRes.data as User;
    });
  }

  save() {
    this.userSvc.edit(this.user).subscribe(jRes => {
      let errs: string = jRes.errors;
      if (errs!=null) {
        console.log("Error editing user: "+errs);
      }
      this.router.navigateByUrl('/user/list');
    });
  }
  backClicked() {
    history.back();
  }

}
