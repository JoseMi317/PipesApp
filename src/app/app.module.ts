import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Config del local de la App
import localeEsGT from '@angular/common/locales/es-GT'
import localeJa from '@angular/common/locales/ja'

import {registerLocaleData} from '@angular/common'

registerLocaleData(localeEsGT);
registerLocaleData(localeJa);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue:'es-GT'
    },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
