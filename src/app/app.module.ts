import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {NZ_CONFIG, NzConfig} from "ng-zorro-antd/core/config";
import {StoreModule} from "@ngrx/store";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {vi as fnsVi} from "date-fns/locale";
import {en_US, NZ_DATE_LOCALE, NZ_I18N} from "ng-zorro-antd/i18n";
import {FullscreenOverlayContainer, OverlayContainer} from '@angular/cdk/overlay';
import {AngularSvgIconModule} from "angular-svg-icon";

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
    BrowserAnimationsModule,
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    AngularSvgIconModule.forRoot(),
    HttpClientModule,

  ],
  providers: [{provide: NZ_I18N, useValue: en_US},
    {provide: NZ_DATE_LOCALE, useValue: fnsVi}, {provide: NZ_CONFIG, useValue: ngZorroConfig},{provide: OverlayContainer, useClass: FullscreenOverlayContainer}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
