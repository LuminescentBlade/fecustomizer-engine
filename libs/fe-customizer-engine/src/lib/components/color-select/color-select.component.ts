import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { getRandomFrom } from '../../functions';
import { FECColorSettings, FECCoordinates } from '../../models';
import { ColorService } from '../../services/color.service';
@Component({
  selector: 'fec-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.scss'],
})
export class ColorSelectComponent implements OnChanges {
  @Input() set colorSettings(settings: FECColorSettings) {
    if (!settings) {
      return;
    }
    if (settings.options) {
      this.colorListOptions = {
        colors: settings.options,
        min: 0,
        max: settings.options.length - 1
      };
    }
  };
  @Input() renderItem: HTMLImageElement | HTMLCanvasElement;
  @Input() canvasSize: FECCoordinates;
  @Input() value: any;
  @Input() baseTitle: string;
  @Output() result = new EventEmitter<HTMLCanvasElement>();
  @Output() colorOptions = new EventEmitter<any>();
  @Output() randFunction = new EventEmitter<()=>any>();
  // color rendering options
  public colorListOptions: any = null;
  // other
  public title: string = 'color';
  constructor(private colorService: ColorService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.renderItem || !this.canvasSize) {
      return;
    }
    this.setData();
  }

  setData() {
    if (this.colorListOptions) {
      const index = this.value || 0;
      this.renderColorFromList(index);
      this.title = `${this.baseTitle} Color: ${index + 1}`;
      const randFunction = this.createRandFunctionForList();
      this.randFunction.emit(randFunction);
    }
  }

  renderColor(color: string) {
    const result = this.colorService.color(this.renderItem, color, {
      dimensions: this.canvasSize
    });
    this.result.emit(result);
  }

  renderColorFromList(index: number) {
    const options = this.colorListOptions.colors;
    const color = options[index];
    this.renderColor(color);
  }

  onColorListSelect(index: number) {
    this.value = index;
    this.colorOptions.emit(index);
  }

  createRandFunctionForList() {
    const min = this.colorListOptions.min;
    const max = this.colorListOptions.max;
    return () => getRandomFrom(min, max);
  }
}
