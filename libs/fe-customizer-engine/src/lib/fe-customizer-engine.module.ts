import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendererComponent } from './components/renderer/renderer.component';
import { createCustomElement } from '@angular/elements';
import { OptionsSelectComponent } from './components/options-select/options-select.component';
import { LayerRendererComponent } from './components/layer-renderer/layer-renderer.component';
import { ColorPickerDirective } from './directives/color-picker.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RendererComponent,
    OptionsSelectComponent,
    LayerRendererComponent,
    ColorPickerDirective,
  ],
  exports: [RendererComponent],
})
export class FeCustomizerEngineModule {
  constructor(private injector: Injector) {}

  ngDoBoostrap() {
    const customElement = createCustomElement(RendererComponent, {
      injector: this.injector,
    });
    customElements.define('fec-renderer', customElement);
  }
}
