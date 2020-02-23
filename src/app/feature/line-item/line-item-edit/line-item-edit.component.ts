import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent implements OnInit {
  title: string = 'Line Item Edit';
  submitBtnTitle: string = 'Save';
  lineItem: LineItem = new LineItem();
  products: Product[] = [];
  request: Request;
  id: number = 0;

  constructor(private lineItemSvc: LineItemService, 
              private productSvc: ProductService,
              private requestSvc: RequestService,
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
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestSvc.get(this.id).subscribe(
      jRes => {
        this.request = jRes.data as Request;
        console.log(this.request);
      });
  }

  save() {
    this.lineItemSvc.edit(this.lineItem).subscribe(jRes => {
      let errs: string = jRes.errors;
      if (errs!=null) {
        console.log("Error editing line-item: "+errs);
      }
      this.router.navigateByUrl('/request/lines');
    });
  }
  
  backClicked() {
    history.back();
  }

  compProduct(a: Product, b: Product): boolean {
    return a && b && a.name === b.name;
  }
}
