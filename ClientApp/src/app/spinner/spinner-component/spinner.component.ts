import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  refCount: number;
  showSpinner: boolean;

  constructor(private spinnerService: SpinnerService) {
    this.refCount = 0;
    this.spinnerService.showSpinnerAnouncement$.subscribe(show => {
      this.refCount++;
      console.log('Spinner show ref: ' + this.refCount);
      this.showSpinner = true;
    });

    this.spinnerService.hideSpinnerAnouncement$.subscribe(show => {
      this.refCount--;

      console.log('Spinner ref : ' + this.refCount);

      if (this.refCount <= 0) {
        this.showSpinner = false;
        this.refCount = 0;
      }
    });
   }

  ngOnInit() {
  }

}
