import { Injectable } from '@angular/core';
import { ModalComponent } from '../feature/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals;

  // constructor() { }

  add(modal: any) {
    this.modals.push(modal);
  }

  remove(modal: any) {
    this.modals = this.modals;
  }

  open() {
    const modal = this.modals.open(ModalComponent);
  }

  close() {
    const modal = this.modals;
    modal.close();
  }
}