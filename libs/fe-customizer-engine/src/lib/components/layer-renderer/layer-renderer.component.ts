import { Component, ElementRef, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FECCoordinates, FECCustomizationOption } from '../../models';
@Component({
  selector: 'fec-layer-renderer',
  templateUrl: './layer-renderer.component.html',
  styleUrls: ['./layer-renderer.component.scss'],
})
export class LayerRendererComponent implements OnInit, OnChanges {
  @HostBinding('class.fec-layer-renderer') baseClass = true;
  @Input() data: FECCustomizationOption;
  @Input() index: number;
  @Input() dependsOnIndex: number | null;
  @Input('layerSize') set layerSize(layerSize: FECCoordinates) {
    const { x, y } = layerSize;
    this.width = x;
    this.height = y;
    this.canvas.height = layerSize.y;
    this.canvas.width = layerSize.x;
    this.ctx!.clearRect(0, 0, x, y);
  }
  @Output() layer = new EventEmitter<HTMLCanvasElement>();
  @Output() indexChange = new EventEmitter<number>();
  public title = '';
  public min = 0;
  public max = 0;
  private width = 0;
  private height = 0;
  private currentRenderList: HTMLImageElement[];
  private currentRenderItem: HTMLImageElement | null;
  private canvas: HTMLCanvasElement = document.createElement('canvas');
  private ctx: CanvasRenderingContext2D | null = this.canvas.getContext('2d');
  private readonly blankIndex = -1;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.data) {
      return;
    }
    if (this.data.dependsOn && this.dependsOnIndex != null) {
      this.currentRenderList = (this.data.assets as HTMLImageElement[][])[this.dependsOnIndex];
      this.currentRenderItem = this.currentRenderList[this.index];
    } else if (Array.isArray(this.data.assets)) {
      this.currentRenderList = (this.data.assets as HTMLImageElement[]);
      this.currentRenderItem = this.currentRenderList[this.index];
    } else if (this.data.assets instanceof HTMLImageElement) {
      this.currentRenderItem = this.index === this.blankIndex ? null : this.data.assets;
    }
    this.min = this.data.canBeBlank ? this.blankIndex : 0;
    this.max = this.currentRenderList?.length - 1 || 0;
    this.title = this.getTitle();
    this.render();
    this.layer.emit(this.canvas);
  }
  ngOnInit(): void { }

  getTitle() {
    if (!this.currentRenderList?.length) {
      if (!this.data.assets) { // disabled 
        return this.data.title;
      }
      // toggle
      return `${this.data.title}: ${this.index === this.blankIndex ? 'Off' : 'On'}`;
    }
    let suffix;
    if (this.data.canBeBlank && this.index === -1) { // empty state
      suffix = 'None';
    } else if (this.data.optionLabels) { // custom label
      suffix = this.data.optionLabels[this.index];
    } else { // index
      suffix = this.index + 1;
    }

    return `${this.data.title}: ${suffix}`;
  }

  render() {
    this.ctx!.clearRect(0, 0, this.width, this.height);
    if (this.currentRenderItem) {
      const { x, y } = this.data.offset!;
      this.ctx!.drawImage(this.currentRenderItem, x, y);
    }
  }
}
