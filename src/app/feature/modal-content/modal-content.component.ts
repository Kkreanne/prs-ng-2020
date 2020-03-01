import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestService } from 'src/app/service/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
  @Input() public request;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal,
              private requestSvc: RequestService,
              private router: Router) { }

  ngOnInit() {
    console.log(this.request);
  }

  passBack() {
    this.passEntry.emit(this.request);
    this.activeModal.close(this.request);
    this.save();
  }

  save() {
    this.requestSvc.edit(this.request).subscribe(jRes => {
      let errs: string = jRes.errors;
      if (errs!=null) {
        console.log("Error editing request: "+errs);
      }
      this.router.navigateByUrl('/request/list');
    });
  }

}
