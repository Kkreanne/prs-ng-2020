import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { BaseComponent } from 'src/app/base/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends BaseComponent implements OnInit {
  users: User[];
  title: string = "User List";

  constructor(private userSvc: UserService,
              protected sysSvc: SystemService) {
    super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit();
    this.userSvc.list().subscribe(
      jRes => {
        this.users = jRes.data as User[];
        console.log(this.users);
      });
  }

}
