import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base/base.component';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { Request } from 'src/app/model/request.class';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent extends BaseComponent implements OnInit {
  requests: Request[];
  title: string = 'Request List in Review Status'

  constructor(private requestSvc: RequestService,
              protected sysSvc: SystemService) {
    super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit();
    this.requestSvc.requestWithStatusOfReview(this.loggedIn.id).subscribe(
      jRes => {
        this.requests = jRes.data as Request[];
        console.log(this.requests);
      });
  }

}
