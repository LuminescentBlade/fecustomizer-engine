import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeCustomizerEngineModule } from 'fe-customizer-engine';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeCustomizerEngineModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
      deps: [PlatformLocation]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
