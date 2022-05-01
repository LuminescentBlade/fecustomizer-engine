import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KamuiComponent } from './containers/kamui/kamui.component';
import { FeCustomizerEngineModule } from 'fe-customizer-engine';

@NgModule({
  declarations: [
    KamuiComponent
  ],
  imports: [
    CommonModule,
    FeCustomizerEngineModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: KamuiComponent }
    ]),
  ],
})
export class KamuiModule { }
