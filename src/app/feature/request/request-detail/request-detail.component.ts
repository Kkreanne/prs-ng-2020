import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  title: string = 'Request Details';
  request: Request;
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

  delete() {
    this.requestSvc.delete(this.id).subscribe(jRes => {
      console.log("Request deleted:", jRes);
      if (jRes.errors != null) {
        console.log("Error deleting request: "+jRes.errors);
      }
      this.router.navigateByUrl("request/list");
    });
  }

}
