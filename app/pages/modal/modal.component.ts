import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId : module.id,
    selector : 'modal',
    template: `<template #content let-c="close" let-d="dismiss">
  <div class="modal-header">
    <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
    <h4 class="modal-title">Modal title</h4>
  </div>
  <div class="modal-body">
    <p>One fine body&hellip;</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" (click)="c('Close click')">Close</button>
  </div>
</template>

<button class="btn btn-lg btn-outline-primary" (click)="open(content)">Launch demo modal</button>

<hr>

<pre>{{closeResult}}</pre>`,
})


export class ModalComponent{

    closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content : any) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}