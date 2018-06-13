import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class SpinnerService {

  private showSpinnerAnouncement = new Subject<boolean>();
  private hideSpinnerAnouncement = new Subject<boolean>();

  showSpinnerAnouncement$ = this.showSpinnerAnouncement.asObservable();
  hideSpinnerAnouncement$ = this.hideSpinnerAnouncement.asObservable();

  constructor() {
   }

  show() {
    this.showSpinnerAnouncement.next(true);
  }

  hide() {
    this.hideSpinnerAnouncement.next(true);
  }

}
