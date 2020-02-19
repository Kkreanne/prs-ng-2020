import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import { Vendor } from 'src/app/model/vendor.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: '..//vendor-maint-shared/vendor-maint.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  title: string = 'Create New Vendor';
  submitBtnTitle: string = 'Create';
  vendor: Vendor = new Vendor();
  
  constructor(private vendorSvc: VendorService,
              private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.vendorSvc.create(this.vendor).subscribe(jRes => {
      let errs: string = jRes.errors;
      if (errs!=null) {
        console.log("Error creating vendor: "+errs);
      }
      this.router.navigateByUrl('/vendor/list');
    });
  }

  backClicked() {
    history.back();
  }

}
