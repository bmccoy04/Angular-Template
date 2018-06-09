import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

path: string;

  constructor(private location: Location, private router: Router) {
      this.router.events.subscribe((event) => {
        if(event instanceof NavigationEnd) {
          const route = this.router.url.slice(1);
          console.log(route);
          if(route === '') {
            this.path = "Home";
          } else {
            this.path = "< " + route;
          }
        }
      });
  }

  ngOnInit() {

  }

  goBack() {
    this.location.back();
  }
}
