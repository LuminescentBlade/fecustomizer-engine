import { Component, ElementRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { getRandomFrom } from '../../functions';
import { FECBodyType, FECConfig, FECCustomizationOption } from '../../models';

@Component({
  selector: 'fec-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss'],
})
export class RendererComponent implements OnInit {
  @HostBinding('class.fec-renderer') baseClass = true;
  @HostBinding('class.fec-renderer--loaded') loaded = false;
  @Input() complete: number;
  @Input() set config(config: FECConfig | null) {
    this._config = config;
    if (config) {
      this.loaded = true;
      const { x, y } = config.dimensions;
      this.currentBodyType = config.options[this.bodyTypeIndex];
      this.optionIndices = {};
      this.renderCache = {};
      this.colorCache = {};
      this.currentBodyType.config
        .forEach((menuItem: FECCustomizationOption) => {
          this.optionIndices[menuItem.name] = menuItem.canBeBlank ? -1 : 0;
          this.renderCache[menuItem.name] = null;
        });
      this.canvasFilledCount = 0;

      this.canvas.height = y;
      this.canvas.width = x;
      this.max = config.options.length - 1;
    }
  };
  get config() {
    return this._config;
  }

  @ViewChild('canvas') set renderCanvas(canvas: ElementRef) {
    if (!canvas) {
      return;
    }

    const renderCanvas = canvas.nativeElement as HTMLCanvasElement;
    this.renderCtx = renderCanvas.getContext('2d');
    if (this.delayedRender) {
      this.drawToCanvas(this.canvas);
    }
  }


  public set bodyTypeIndex(index: number) {
    this._bodyTypeIndex = index;
    this.currentBodyType = this.config!.options[index];
  };
  get bodyTypeIndex() {
    return this._bodyTypeIndex;
  }

  public currentBodyType: FECBodyType;
  public optionIndices: { [key: string]: number } = {};
  public renderCache: { [key: string]: HTMLCanvasElement | null } = {};
  public colorCache: { [key: string]: any } = {};
  private optionRandFunc: { [key: string]: () => number } = {};
  private colorRandFunc: { [key: string]: () => any } = {};
  public min = 0;
  public max = 0;

  private _config: FECConfig | null;
  private _bodyTypeIndex: number = 2;
  private canvas = document.createElement('canvas');
  private ctx = this.canvas.getContext('2d');
  private renderCtx: CanvasRenderingContext2D | null;
  private delayedRender = true;

  private canvasFilledCount = 0;

  constructor() { }

  ngOnInit(): void { }

  onLayerRender($event: HTMLCanvasElement, name: string) {
    if (!this.renderCache[name]) {
      this.canvasFilledCount++;
    }
    this.renderCache[name] = $event;
    this.render();
  }

  onIndexChange($event: number, name: string) {
    this.optionIndices[name] = $event;
  }

  onColorChange($event: any, name: string) {
    if (!this.renderCache[name]) {
      this.canvasFilledCount++;
    }
    this.colorCache[name] = $event;
  }

  render() {
    // only render when we have all items. with the way this is setup, even empty options
    // should give a blank canvas and not null.
    // this way we don't render the canvas like 7 times whenever the 
    if (this.canvasFilledCount < this.config!.layerOrder.length) {
      return;
    }
    this.ctx!.clearRect(0, 0, this.config!.dimensions.x, this.config!.dimensions.y);
    const layerOrder = this.config!.layerOrder;
    for (let i = layerOrder.length - 1; i >= 0; i--) {
      const name = layerOrder[i];
      const item = this.renderCache[name];
      if (item) {
        this.ctx!.drawImage(item, 0, 0);
      }
    }
    if (!this.renderCtx) {
      this.delayedRender = true;
    } else {
      this.drawToCanvas(this.canvas);
    }
  }

  drawToCanvas(image: HTMLCanvasElement) {
    this.renderCtx!.clearRect(0, 0, this.config!.dimensions.x, this.config!.dimensions.y);
    this.renderCtx!.drawImage(image, 0, 0);
  }

  getRandom() {
    const newBodyType = getRandomFrom(this.min, this.max);
    this.config!.menuOrder.forEach(item => {
      const randFunction = this.optionRandFunc[item];
      const newVal = randFunction();
      const colorRandFunction = this.colorRandFunc[item];
      const newColor = colorRandFunction ? colorRandFunction() : undefined;
      if (this.optionIndices[item] !== newVal || this.colorCache[item] !== newColor) {
        this.canvasFilledCount--;
        this.renderCache[item] = null;
      }
      this.optionIndices[item] = newVal;
      this.colorCache[item] = newColor;
    });
    if (newBodyType !== this.bodyTypeIndex) {
      // all new items
      this.canvasFilledCount = 0;
      this.bodyTypeIndex = newBodyType;
      this.renderCache = {};
    }
    this.optionIndices = { ...this.optionIndices };
    this.colorCache = { ...this.colorCache };
  }

  setOptionRandomFunction($event: () => number, name: string) {
    this.optionRandFunc[name] = $event;
  }

  setColorRandomFunction($event: () => any, name: string) {
    this.colorRandFunc[name] = $event;
  }

  trackByIndex(index: number, item: any) {
    return index;
  }
}
