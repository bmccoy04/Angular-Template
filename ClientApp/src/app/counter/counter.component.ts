import { Component } from '@angular/core';
import { SpinnerService } from '../spinner/spinner.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  constructor(private spinnerService: SpinnerService) {  }

  public incrementCounter() {
    this.spinnerService.show();
    this.currentCount++;
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);

  }
}
