import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccesstokenComponent } from './accesstoken/accesstoken.component';
import { AccessTokenService } from './@core/apicore/apiservice/accesstoken.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './@core/apicore/apiservice/common.service';

@NgModule({
  declarations: [
    AppComponent,
    AccesstokenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ AccessTokenService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
