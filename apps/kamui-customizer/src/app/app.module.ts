import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeCustomizerEngineModule } from 'fe-customizer-engine';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeCustomizerEngineModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
