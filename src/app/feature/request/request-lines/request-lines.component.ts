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
  request: Request[];
  lineItems: LineItem[];
  id: number = 0;

  constructor(private requestSvc: RequestService,
              private lineItemSvc: LineItemService,
              protected sysSvc: SystemService,
              private router: Router,
              private route: ActivatedRoute) {
    super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestSvc.get(this.id).subscribe(
      jRes => {
        this.request = jRes.data as Request[];
        console.log(this.request);
      });
      this.lineItemSvc.list().subscribe(
        jRes => {
          this.lineItems = jRes.data as LineItem[];
          console.log(this.lineItems);
        });
  }

}
