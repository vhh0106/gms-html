import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {NZ_CONFIG, NzConfig} from "ng-zorro-antd/core/config";
import {StoreModule} from "@ngrx/store";

const ngZorroConfig: NzConfig = {
  modal: {
    nzMaskClosable: false
  }
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    HttpClientModule,

  ],
  providers: [{provide: NZ_CONFIG, useValue: ngZorroConfig}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
