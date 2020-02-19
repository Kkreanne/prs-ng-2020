import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { BaseComponent } from 'src/app/base/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent extends BaseComponent implements OnInit {
  title1: string = 'Line Items per Request';
  title2: string = 'Add New Line Items';
  requests: Request[];
  lineItems: LineItem[];
  id: number = 0;

  constructor(private requestSvc: RequestService,
              private lineItemSvc: LineItemService,
              protected sysSvc: SystemService) {
    super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit();
    this.requestSvc.list().subscribe(
      jRes => {
        this.requests = jRes.data as Request[];
        console.log(this.requests);
      });
  }

}
