import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { CounterComponent } from '../../counter/counter.component';
import { FetchDataComponent } from '../../fetch-data/fetch-data.component';


import { NavCardComponent } from '../nav-card/nav-card.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';



const routes: Routes = [
{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: 'Counter', component: CounterComponent },
{ path: 'Fetch-Data', component: FetchDataComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    NavCardComponent,
    NavMenuComponent,
    NavBarComponent
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavModule { }
