import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'kamui',
        loadChildren: () => import('libs/kamui/src/lib/kamui.module').then(m => m.KamuiModule)
      },
      {
        path: 'robin',
        loadChildren: () => import('libs/robin/src/lib/robin.module').then(m => m.RobinModule)
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
