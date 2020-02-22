import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {
  title: string = 'Create New Line Item';
  submitBtnTitle: string = 'Create';
  lineItem: LineItem = new LineItem();
  products: Product[] = [];
  id: number = 0;

  constructor(private lineItemSvc: LineItemService,
              private productSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.lineItemSvc.get(this.id).subscribe(jRes => {
      this.lineItem = jRes.data as LineItem;
    });
    this.productSvc.list().subscribe(
      jRes => {
        this.products = jRes.data as Product[];
        console.log(this.products);
      });
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
