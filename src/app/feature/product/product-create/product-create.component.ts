import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title: string = 'Create New Product';
  submitBtnTitle: string = 'Create';
  product: Product = new Product();
  vendors: Vendor[] = [];

  constructor(private productSvc: ProductService,
              private vendorSvc: VendorService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.vendorSvc.list().subscribe(
      jRes => {
        this.vendors = jRes.data as Vendor[];
        console.log(this.vendors); 
      });
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

  compVendor(a: Vendor, b: Vendor): boolean {
    return a && b && a.name === b.name;
  }
}
