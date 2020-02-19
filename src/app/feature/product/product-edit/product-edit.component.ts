import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: '..//product-maint-shared/product-maint.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title: string = 'Product Edit';
  submitBtnTitle: string = 'Save';
  product: Product = new Product();
  vendors: Vendor[] = [];
  id: number = 0;

  constructor(private productSvc: ProductService,
    private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.productSvc.get(this.id).subscribe(jRes => {
      this.product = jRes.data as Product;
    })
    this.vendorSvc.list().subscribe(
      jRes => {
        this.vendors = jRes.data as Vendor[];
        console.log(this.vendors);
      })
  }

  save() {
    this.productSvc.edit(this.product).subscribe(jRes => {
      let errs: string = jRes.errors;
      if (errs != null) {
        console.log("Error editing product: " + errs);
      }
      this.router.navigateByUrl('/product/list');
    });
  }

  backClicked() {
    history.back();
  }
  
}
