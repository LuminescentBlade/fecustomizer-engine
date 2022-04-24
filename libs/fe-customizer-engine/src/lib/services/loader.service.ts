import { Injectable } from '@angular/core';
import { FECBodyOptionItem, FECBodyOptions, FECDependantOptionItem, FECImagePathConfig, FECLoadBase, FECLoaderConfig, FECOptionTitleConfig, FECOptionTitles, FECPathMap } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  /**
   * IMAGE LOADING CONFIG 
   */

  /**
   * 
   * @param base 
   * @param bodyOptions 
   * @param paths 
   * @param ext 
   * @returns 
   */
  generateImagePathConfig(
    base: FECLoadBase,
    bodyOptions: FECBodyOptions,
    paths: FECPathMap,
    ext: string
  ): FECImagePathConfig {
    const subCategories = Object.keys(bodyOptions).map(bodyType => {
      const options = bodyOptions[bodyType];
      const optionConfig: FECImagePathConfig[] = [];
      for (const option of Object.keys(options)) {
        const optionValue = options[option];
        this.doOnOptionType(
          optionValue,
          (isToggleOption) => { // if boolean
            optionConfig.push({ name: option, path: `${paths[option]}${ext}` });
          },
          (count) => { // if number
            const optionSubCategories = this.getGeneralPaths(count, ext);
            optionConfig.push({ name: option, path: paths[option], subCategories: optionSubCategories })
          },
          (config) => { // if object
            const dependsOn = config.dependsOn;
            const dependsOnConfig = options[dependsOn];
            if (typeof dependsOnConfig === 'object') {
              throw Error('do this shit later');
            }
            const optionSubCategories = this.getDependentPaths(
              dependsOnConfig,
              config.options,
              ext,
              paths
            );
            optionConfig.push({ name: option, path: paths[option], subCategories: optionSubCategories })
          });
      }
      const config: FECImagePathConfig = {
        name: bodyType,
        path: paths[bodyType],
        subCategories: optionConfig
      };
      return config;
    });
    return {
      ...base,
      subCategories
    }
  }

  private getGeneralPaths(count: number, ext: string) {
    const subcategories: { name: string, path: string }[] = [];
    for (let i = 1; i <= count; i++) {
      subcategories.push({
        name: `${i}`,
        path: `${i}${ext}`
      });
    }
    return subcategories;
  }

  private getDependentPaths(count: number | boolean, options: string[], ext: string, paths: FECPathMap,) {
    const subcategories: { name: string, path: string }[] = [];
    for (let i = 1; i <= count; i++) {
      options.forEach((option) => {
        subcategories.push({
          name: `${i}_${option}`,
          path: `${i}_${paths[option]}${ext}`
        });
      });
    }
    return subcategories;
  }

  /**
   * CUSTOMIZER CONFIG
   */

  generateConfig(
    bodyOptions: FECBodyOptions,
    config: FECLoaderConfig
  ) {
    return Object.keys(bodyOptions).map((bodyType) => ({
      bodyType: bodyType,
      title: config.titles.bodyTypes[bodyType],
      config: this.generateConfigForBodyType(bodyType, bodyOptions[bodyType], config)
    }));
  }

  private generateConfigForBodyType(bodyType: string, bodyConfig: FECBodyOptionItem, config: FECLoaderConfig) {
    return config.menuOrder.map(option => {
      return this.doOnOptionType(
        bodyConfig[option],
        (hasOption) => { // if boolean
          return this.getToggleOptionConfig(bodyType, option, config);
        },
        (optionCount) => { // if number
          return this.getStandardOptionConfig(bodyType, option, optionCount, config);
        },
        (optionConfig) => { // if object
          return this.getDependentOptionConfig(
            bodyType,
            //@ts-ignore
            option,
            optionConfig.dependsOn,
            //@ts-ignore // we should assume that the dependsOn option does not depend on more things
            bodyConfig[optionConfig.dependsOn],
            optionConfig.options,
            config
          );
        },
        () => { // null
          return this.getNullOptionConfig(option, config)
        });

    });
  }

  private getToggleOptionConfig(bodyType: string, option: string, config: FECLoaderConfig) {
    const key = `${config.baseKey} ${bodyType} ${option}`
    return {
      name: option,
      title: config.titles.options[option],
      assets: config.assets[key]
    }
  };

  private getStandardOptionConfig(
    bodyType: string,
    option: string,
    count: number,
    config: FECLoaderConfig
  ) {
    const result = this.getConfigWithTitle(option, config.titles);
    const key = `${config.baseKey} ${bodyType} ${result.name}`;
    return {
      ...result,
      assets: this.getAssetsForType(key, count, config.assets)
    }
  }

  private getNullOptionConfig(
    option: string,
    config: FECLoaderConfig
  ) {
    return this.getConfigWithTitle(option, config.titles);
  }

  private getDependentOptionConfig(
    bodyType: string,
    option: string,
    dependsOn: string,
    numDependsOnOptions: number,
    optionList: string[],
    config: FECLoaderConfig
  ) {
    const result = this.getConfigWithTitle(option, config.titles);
    const key = `${config.baseKey} ${bodyType} ${result.name}`;
    return {
      ...result,
      assets: this.getAssetsForType(key, numDependsOnOptions, config.assets, optionList),
      dependsOn: dependsOn,
    };

  }

  private getAssetsForType(parentKey: string, count: number, assets: any, suffixes?: string[]) {
    if (!count) {
      return null;
    }
    const items: any = [];
    for (let i = 1; i <= count; i++) {
      if (!suffixes?.length) {
        const key = `${parentKey} ${i}`;
        items.push(assets[key]);
      } else {
        const group: HTMLImageElement[] = suffixes.map(suffix => {
          const key = `${parentKey} ${i}_${suffix}`;
          return assets[key]
        });
        items.push(group);
      }
    }
    return items;
  };

  private getConfigWithTitle(option: string, titles: FECOptionTitles) {
    const titleConfig = titles.options[option];
    if (typeof titleConfig === 'string') {
      return {
        name: option,
        title: titleConfig
      }
    } else {
      return {
        name: option,
        title: titleConfig.title,
        optionLabels: titleConfig.children
      }
    }
  }

  private doOnOptionType(
    value: boolean | number | { dependsOn: string, options: string[] },
    onIfBoolean: (v: boolean) => any,
    onIfNumber: (v: number) => any,
    onIfObject: (v: { dependsOn: string, options: string[] }) => any,
    onNullObject?: () => any
  ) {
    if (typeof value === 'boolean') {
      return onIfBoolean(value);
    } else if (typeof value === 'number') {
      return onIfNumber(value);
    } else if (value) { // if not true or number it's the dependencies case
      return onIfObject(value);
    } else if (onNullObject) {
      return onNullObject();
    }
  }
}
