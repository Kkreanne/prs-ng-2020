import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title: string = 'Product Details';
  product: Product;
  id: number = 0;

  constructor(private productSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.productSvc.get(this.id).subscribe(jRes => {
      this.product = jRes.data as Product;
    });
  }

  delete() {
    this.productSvc.delete(this.id).subscribe(jRes => {
      console.log("product delete jr:",jRes);
      if (jRes.errors != null) {
        console.log("Error deleting product: "+jRes.errors);
      }
      this.router.navigateByUrl("product/list");
    });
  }

}
