import { APP_BASE_HREF } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { LoaderService, FECLoaderBodyConfig, FECLoaderOptions, FECConfigLoad } from 'fe-customizer-engine';
import { Observable, of } from 'rxjs';
import { ConfigKey, corrinConfigs } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private cornPath = this.getBasePath('assets/corn');
  private ext = 'png';

  private cornConfig: FECLoaderOptions = {
    rootKey: ConfigKey.Corrin,
    rootPath: this.cornPath,
    imageType: this.ext,
    menuOrder: corrinConfigs.menuOrder,
    layerOrder: corrinConfigs.layerOrder,
    dimensions: { x: 255, y: 255 },
    bodyOptions: corrinConfigs.bodOptions
  };

  private inputConfigs = {
    [ConfigKey.Corrin]: this.cornConfig
  };

  // cache data here
  // setting up ngrx for this project is probably overkill. If we ever do
  // set up ngrx then move this there.
  private data: { [key: string]: FECConfigLoad | null } = {
    [ConfigKey.Corrin]: null,
    [ConfigKey.Robin]: null,
    [ConfigKey.Kris]: null
  };

  constructor(private loader: LoaderService, @Inject(APP_BASE_HREF) private _baseHref: string) { }

  getCorrinConfig() {
    const cachedCorn = this.data[ConfigKey.Corrin];
    if(cachedCorn){
      return of(cachedCorn);
    } else {
      const corn$ = this.loader.getConfig(this.cornConfig);
      return corn$;
    } 
  }

  cacheCorn(value:FECConfigLoad){
    this.data[ConfigKey.Corrin] = value;
  }

  getBasePath(path: string) {
    return ['.', this._baseHref.split('/').join(''), path]
      .filter(item => item.length)
      .join('/');
  }
}
