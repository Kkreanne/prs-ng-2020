import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent extends BaseComponent implements OnInit {
  title: string = 'Create New Request';
  submitBtnTitle: string = 'Create';
  request: Request = new Request();

  constructor(private requestSvc: RequestService,
              protected sysSvc: SystemService,
              private router: Router,
              private route: ActivatedRoute) { 
    super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit();
    this.request.user = this.loggedIn;
  }

  save() {
    this.requestSvc.create(this.request).subscribe(jRes => {
      let errs: string = jRes.errors;
      if (errs!=null) {
        console.log("Error creating request: "+errs);
      }
      this.router.navigateByUrl('/request/list');
    });
  }

  backClicked() {
    history.back();
  }

}
