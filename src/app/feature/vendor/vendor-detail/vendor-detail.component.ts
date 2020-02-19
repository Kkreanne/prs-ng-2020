import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  title: string = 'Vendor Details';
  vendor: Vendor;
  id: number = 0;

  constructor(private vendorSvc: VendorService,
            private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.vendorSvc.get(this.id).subscribe(jRes => {
      this.vendor = jRes.data as Vendor;
    });
  }

  delete() {
    this.vendorSvc.delete(this.id).subscribe(jRes => {
      console.log("vendor delete jr:",jRes);
      if (jRes.errors != null) {
        console.log("Error deleting vendor: "+jRes.errors);
      }
      this.router.navigateByUrl("vendor/list");
    });
  }

}
