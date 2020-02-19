import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from 'src/app/model/request.class';

@Component({
  selector: 'app-request-create',
  templateUrl: '..//request-maint-shared/request-maint.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  title: string = 'Create New Request';
  submitBtnTitle: string = 'Create';
  request: Request = new Request();

  constructor(private requestSvc: RequestService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
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
