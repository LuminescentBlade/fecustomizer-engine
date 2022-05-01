import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeCustomizerEngineModule } from 'fe-customizer-engine';
import { AppComponent } from './app.component';
import { KamuiComponent } from './routes/kamui/kamui.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';

@NgModule({
  declarations: [AppComponent, KamuiComponent, HomeComponent],
  imports: [
    BrowserModule,
    FeCustomizerEngineModule,
    RouterModule.forRoot([
      {
        path: 'kamui',
        component: KamuiComponent
      },
      {
        path: '',
        component: HomeComponent
      },
    ])
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
      deps: [PlatformLocation],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
