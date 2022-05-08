import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendererComponent } from './components/renderer/renderer.component';
import { createCustomElement } from '@angular/elements';
import { OptionsSelectComponent } from './components/options-select/options-select.component';
import { LayerRendererComponent } from './components/layer-renderer/layer-renderer.component';
import { ColorService } from './services/color.service';
import { ColorSelectComponent } from './components/color-select/color-select.component';
import { ColorOptionsPaletteComponent } from './components/color-options-palette/color-options-palette.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RendererComponent,
    OptionsSelectComponent,
    LayerRendererComponent,
    ColorSelectComponent,
    ColorOptionsPaletteComponent,
  ],
  exports: [RendererComponent],
  entryComponents: [RendererComponent],
  providers: [ColorService],
})
export class FeCustomizerEngineModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(RendererComponent, {
      injector: this.injector,
    });
    customElements.define('fe-custom-renderer', customElement);
  }

  ngDoBoostrap() {
  }
}
