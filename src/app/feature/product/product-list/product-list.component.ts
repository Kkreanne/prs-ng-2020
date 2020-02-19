import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { BaseComponent } from 'src/app/base/base/base.component';
import { ProductService } from 'src/app/service/product.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends BaseComponent implements OnInit {
  products: Product[];
  title: string = 'Product List'; 

  constructor(private productSvc: ProductService,
              protected sysSvc: SystemService) { 
    super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit();
    this.productSvc.list().subscribe(
      jRes => {
        this.products = jRes.data as Product[];
        console.log(this.products);
      });
  }

}
