import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class'

@Component({
  selector: 'app-vendor-edit',
  templateUrl: '..//vendor-maint-shared/vendor-maint.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  title: string = 'Vendor Edit';
  submitBtnTitle: string = 'Save';
  vendor: Vendor = new Vendor();
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

  save() {
    this.vendorSvc.edit(this.vendor).subscribe(jRes => {
      let errs: string = jRes.errors;
      if (errs!=null) {
        console.log("Error editing vendor: "+errs);
      }
      this.router.navigateByUrl('/vendor/list');
    });
  }
  backClicked() {
    history.back();
  }

}
