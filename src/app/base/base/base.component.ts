import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  template: '',
})

export class BaseComponent implements OnInit {
  sortColumn: string = 'id';
  ascOrder: boolean = true;
  loggedIn: User = null;
  isAdmin: boolean;
  isReviewer: boolean;

  constructor(protected sysSvc: SystemService) { }

  ngOnInit() {
    this.sysSvc.checkLogin();
    this.loggedIn = this.sysSvc.loggedIn;
    this.isAdmin = this.sysSvc.isAdmin();
    this.isReviewer = this.sysSvc.isReviewer();
  }

  sort(column: string): void {
    if (this.sortColumn === column) {
      this.ascOrder = !this.ascOrder;
      return;
    }
    this.ascOrder = true;
    this.sortColumn = column;
  }
}
