import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: '..//product-maint-shared/product-maint.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title: string = 'Create New Product';
  submitBtnTitle: string = 'Create';
  product: Product = new Product();

  constructor(private productSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  save() {
    this.productSvc.create(this.product).subscribe(jRes => {
      let errs: string = jRes.errors;
      if (errs!=null) {
        console.log("Error creating product: "+errs);
      }
      this.router.navigateByUrl('/product/list');
    });
  }

  backClicked() {
    history.back();
  }

}
