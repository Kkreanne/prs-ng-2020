import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from 'src/app/feature/modal/modal.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ModalComponent],
    exports: [ModalComponent]
})
export class ModalModule { }