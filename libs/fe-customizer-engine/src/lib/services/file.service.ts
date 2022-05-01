import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  save(imageDataUrl: string, name: string){
    const tempLink = document.createElement('a');
    tempLink.download = name;
    tempLink.href = imageDataUrl;
    tempLink.click();
    tempLink.remove();
  }
}
