import { Injectable } from '@angular/core';
import { BaseHrefService } from '@fecustomizer-engine/common';
import { FECConfigLoad, FECLoaderOptions, LoaderService, StoreService } from 'fe-customizer-engine';
import { of } from 'rxjs';
import { robinConfigs } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private robinPath = this.baseHref.getBasePath('assets/robin');
  private ext = 'png';

  private robinConfig: FECLoaderOptions = {
    rootKey: robinConfigs.key,
    rootPath: this.robinPath,
    imageType: this.ext,
    menuOrder: robinConfigs.menuOrder,
    layerOrder: robinConfigs.layerOrder,
    dimensions: { x: 255, y: 255 },
    bodyOptions: robinConfigs.bodOptions
  };


  constructor(
    private loader: LoaderService,
    private store: StoreService,
    private baseHref: BaseHrefService
  ) { }

  getRobinConfig() {
    const cachedCorn = this.store.getConfig(robinConfigs.key);
    if (cachedCorn) {
      return of(cachedCorn);
    } else {
      const corn$ = this.loader.getConfig(this.robinConfig);
      return corn$;
    }
  }

  cacheRobin(value: FECConfigLoad) {
    this.store.setConfig(robinConfigs.key, value);
  }
}
