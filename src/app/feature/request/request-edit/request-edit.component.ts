import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: '..//request-maint-shared/request-maint.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  title: string = 'Request Edit';
  submitBtnTitle: string = 'Save';
  request: Request = new Request();
  id: number = 0;

  constructor(private requestSvc: RequestService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestSvc.get(this.id).subscribe(jRes => {
      this.request = jRes.data as Request;
    });
  }

  save() {
    this.requestSvc.edit(this.request).subscribe(jRes => {
      let errs: string = jRes.errors;
      if (errs!=null) {
        console.log("Error editing request: "+errs);
      }
      this.router.navigateByUrl('/request/list');
    });
  }
  backClicked() {
    history.back();
  }

}
