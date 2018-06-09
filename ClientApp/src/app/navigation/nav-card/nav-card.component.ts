import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-card',
  templateUrl: './nav-card.component.html',
  styleUrls: ['./nav-card.component.css']
})
export class NavCardComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;
  @Input() route: string;
  @Input() linkText: string;

  Something: string;

  constructor() {
  }

  ngOnInit() {
  }

}
