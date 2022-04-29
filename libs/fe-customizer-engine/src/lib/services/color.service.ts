import { Injectable } from '@angular/core';
import { FECCoordinates } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  // swapcanvases
  private canvas1 = document.createElement('canvas');
  private canvas2 = document.createElement('canvas');
  private ctx1 = this.canvas1.getContext('2d');
  private ctx2 = this.canvas2.getContext('2d');
  
  private width = 0;
  private height = 0;

  constructor() { }

  color(
    image: HTMLCanvasElement | HTMLImageElement,
    color: string,
    config: { dimensions: FECCoordinates, renderType?: string }
  ) {
    const { x, y } = config.dimensions;
    this.setSize(x, y);
    const ctx1 = this.ctx1!;
    const ctx2 = this.ctx2!;
    ctx2!.clearRect(0, 0, x, y);
    ctx1.drawImage(image, 0, 0);
    ctx2!.globalCompositeOperation = "source-over";
    ctx2!.drawImage(image, 0, 0);
    ctx1.globalCompositeOperation = "source-over";
    ctx1.drawImage(image, 0, 0);
    this.overlayFilter(ctx2, color);
    ctx1.drawImage(this.canvas2, 0, 0);
    ctx1.globalCompositeOperation = "source-over";
    ctx2!.globalCompositeOperation = "source-over";
    ctx2!.clearRect(0, 0, 255, 255);
    return this.canvas1;
  }


  private overlayFilter(context: CanvasRenderingContext2D, color: string) {
    const col = this.hexToRGBA(color);
    const calc = (a: number, b: number) => {
      const _a = a / 255;
      const _b = b / 255;
      const r = (_a < 0.5) ? (2 * _a * _b) : (1 - 2 * (1 - _a) * (1 - _b));
      return Math.round(r * 255);
    }

    const imgdata = context.getImageData(0, 0, 256, 256);
    const colorPix = (position: number) => {
      if(!imgdata?.data){
        return;
      }
      imgdata.data[position] = calc(imgdata.data[position], col!.r);
      imgdata.data[position + 1] = calc(imgdata.data[position + 1], col!.g);
      imgdata.data[position + 2] = calc(imgdata.data[position + 2], col!.b);
    }
    const hasColor = (position: number) => {
      const a = imgdata.data[position + 3];
      return (a != 0)
    }

    for (let i = 0; i < imgdata.data.length; i += 4) {
      if (hasColor(i)) colorPix(i);
    }
    context.putImageData(imgdata, 0, 0);
  }

  private setSize(width: number, height: number) {
    this.canvas1.width = width;
    this.canvas1.height = height;
    this.canvas2.width = width;
    this.canvas2.height = height;
    this.width = width;
    this.height = height;
  }

  private hexToRGBA(hex: string, alpha: number = 1) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: alpha
    } : null;
  }
}
