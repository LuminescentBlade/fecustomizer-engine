import { Injectable } from '@angular/core';
import { LoaderService, FECLoaderOptions, FECConfigLoad, StoreService } from 'fe-customizer-engine';
import { BaseHrefService } from 'libs/common/src';
import { of } from 'rxjs';
import { corrinConfigs } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private cornPath = this.baseHref.getBasePath('assets/corn');
  private ext = 'png';

  private cornConfig: FECLoaderOptions = {
    rootKey: corrinConfigs.key,
    rootPath: this.cornPath,
    imageType: this.ext,
    menuOrder: corrinConfigs.menuOrder,
    layerOrder: corrinConfigs.layerOrder,
    dimensions: { x: 255, y: 255 },
    bodyOptions: corrinConfigs.bodOptions
  };

  constructor(
    private loader: LoaderService,
    private store: StoreService,
    private baseHref: BaseHrefService
  ) { }

  getCorrinConfig() {
    const cachedCorn = this.store.getConfig(corrinConfigs.key);
    if (cachedCorn) {
      return of(cachedCorn);
    } else {
      const corn$ = this.loader.getConfig(this.cornConfig);
      return corn$;
    }
  }

  cacheCorn(value: FECConfigLoad) {
    this.store.setConfig(corrinConfigs.key, value);
  }
}
