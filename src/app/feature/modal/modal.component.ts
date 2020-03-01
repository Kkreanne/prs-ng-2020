import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { BaseComponent } from 'src/app/base/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'jw-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent extends BaseComponent implements OnInit, OnDestroy {
  @Input()
  private element: any;

  constructor(private modalSvc: ModalService, 
              private el: ElementRef, 
              protected sysSvc: SystemService) {
                super(sysSvc);
                this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this) {
      console.error('modal must have an unique id');
      return;
    }
    document.body.appendChild(this.element);
    this.element.addEventListener('click', (el: { target: { className: string; }; }) => {
      if (el.target.className === 'jw-modal') {
        this.close();
      }
    });
    this.modalSvc.add(this);
  }

  ngOnDestroy(): void {
    this.modalSvc.remove(this.element);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }
}
