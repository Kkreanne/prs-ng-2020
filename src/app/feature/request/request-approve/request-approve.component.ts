import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base/base.component';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { LineItemService } from 'src/app/service/line-item.service';
import { LineItem } from 'src/app/model/line-item.class';
import { Request } from 'src/app/model/request.class';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalContentComponent } from 'src/app/feature/modal-content/modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent extends BaseComponent implements OnInit {
  title1: string = 'Approve or Reject Request';
  title2: string = 'Associated Line Items';
  approveBtn: string = 'Approve';
  rejectBtn: string = 'Reason for Rejection';
  request: Request;
  lineItems: LineItem[];
  id: number = 0;

  constructor(private requestSvc: RequestService,
              protected sysSvc: SystemService,
              private lineItemSvc: LineItemService,
              private router: Router,
              private route: ActivatedRoute,
              public modalSvc: NgbModal) {
    super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestSvc.get(this.id).subscribe(
      jRes => {
        this.request = jRes.data as Request;
        console.log(this.request);
      });
    this.lineItemSvc.getByRequest(this.id).subscribe(
      jRes => {
        this.lineItems = jRes.data as LineItem[];
        console.log(this.lineItems);
      });
  }

  approve() {
    this.requestSvc.approve(this.request).subscribe(
      jRes => {
        let errs: string = jRes.errors;
        if (errs != null) {
          console.log("Error approving request: " + errs);
        }
        this.router.navigateByUrl('/request/list');
      });
  }

  onReject() {
    const modal = this.modalSvc.open(ModalContentComponent);
    modal.componentInstance.request = this.request;
    modal.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }
}
