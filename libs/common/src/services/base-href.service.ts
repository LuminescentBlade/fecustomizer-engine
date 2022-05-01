import { APP_BASE_HREF } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseHrefService {

  constructor(@Inject(APP_BASE_HREF) private _baseHref: string) { }

  getBasePath(path: string) {
    return ['.', this._baseHref.split('/').join(''), path]
      .filter(item => item.length)
      .join('/');
  }
}
