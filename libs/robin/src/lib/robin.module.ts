import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RobinComponent } from './containers/robin/robin.component';
import { FeCustomizerEngineModule } from 'fe-customizer-engine';

@NgModule({
  imports: [
    CommonModule,
    FeCustomizerEngineModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: RobinComponent}
    ]),
  ],
  declarations: [RobinComponent],
})
export class RobinModule {}
