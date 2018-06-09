import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NavModule} from './navigation/nav-module/nav.module';

import { AppComponent } from './app.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyContainerComponent,
    SiteHeaderComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NavModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
