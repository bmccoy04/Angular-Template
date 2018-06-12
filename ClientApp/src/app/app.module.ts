import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavModule } from './navigation/nav-module/nav.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { NavMenuComponent } from './navigation/nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyContainerComponent,
    SiteHeaderComponent,
    NavBarComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NavModule,
    RouterModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
