import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-line-item-create',
  templateUrl: '..//line-item-maint-shared/line-item-maint.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {
  title: string = 'Create New Line Item';
  submitBtnTitle: string = 'Create';
  lineItem: LineItem = new LineItem();

  constructor(private lineItemSvc: LineItemService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  save() {
    this.lineItemSvc.create(this.lineItem).subscribe(jRes => {
      let errs: string = jRes.errors;
      if (errs!=null) {
        console.log("Error creating line-item: "+errs);
      }
      this.router.navigateByUrl('/request/lines');
    });
  }

}
