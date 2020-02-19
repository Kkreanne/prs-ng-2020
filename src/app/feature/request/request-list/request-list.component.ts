import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { BaseComponent } from 'src/app/base/base/base.component';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent extends BaseComponent implements OnInit {
  requests: Request[];
  title: string = 'Request List';

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
