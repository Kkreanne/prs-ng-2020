import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  title: string = 'User Details';
  user: User;
  id: number;

  constructor(private userSvc: UserService,
            private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.userSvc.get(this.id).subscribe(jRes => {
      this.user = jRes.data as User;
    });
  }

  delete() {
    this.userSvc.delete(this.id).subscribe(jRes => {
      console.log("user delete jr:",jRes);
      if (jRes.errors != null) {
        console.log("Error deleting user: "+jRes.errors);
      }
      this.router.navigateByUrl("user/list");
    });
  }

}
