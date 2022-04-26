import { Injectable } from '@angular/core';
import { loadImagesFromLocal } from '../functions';
import {
  FECOptionConfig,
  FECBodyConfig,
  FECImagePathConfig,
  FECLoaderBodyChildOptions,
  FECLoaderBodyConfig,
  FECLoaderBodyOptionItem,
  FECLoaderBodyType,
  FECLoaderConfig,
  FECLoaderOptions,
  FECConfig
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  async getConfig(input: FECLoaderOptions): Promise<FECConfig> {
    const assetConfig = this.generateImagePathConfig(input);
    const assets = await loadImagesFromLocal(assetConfig);
    const bodyConfig = this.generateConfig(input.bodyOptions, {
      baseKey: input.rootKey,
      assets,
      menuOrder: input.menuOrder
    });
    return {
      dimensions: input.dimensions,
      options: bodyConfig
    };
  }

  /**
   * IMAGE LOADING CONFIG 
   */

  generateImagePathConfig(
    input: FECLoaderOptions
  ): FECImagePathConfig {
    const { rootKey, rootPath, imageType, bodyOptions } = input;
    const subCategories = Object.keys(bodyOptions).map(bodyTypeName => {
      const bodyType: FECLoaderBodyType = bodyOptions[bodyTypeName];
      const optionConfig: FECImagePathConfig[] = [];
      const bodyTypeOptions = bodyType.options;
      for (const optionName of Object.keys(bodyType.options)) {
        const option = bodyTypeOptions[optionName];
        this.doOnOptionType(
          option,
          () => { // if boolean
            optionConfig.push({ name: optionName, path: `${option.path}.${imageType}` });
          },
          (count) => { // if number
            const optionSubCategories = this.getGeneralPaths(count, imageType);
            optionConfig.push({ name: optionName, path: option.path, subCategories: optionSubCategories })
          },
          (dependsOn) => { // if object
            const dependsOnConfig = bodyTypeOptions[dependsOn];
            const optionSubCategories = this.getDependentPaths(
              dependsOnConfig.count!,
              option.childOptions!,
              imageType
            );
            optionConfig.push({ name: optionName, path: option.path, subCategories: optionSubCategories })
          });
      }
      const config: FECImagePathConfig = {
        name: bodyTypeName,
        path: bodyType.path,
        subCategories: optionConfig
      };
      return config;
    });
    return {
      name: rootKey,
      path: rootPath,
      subCategories
    }
  }

  private getGeneralPaths(count: number, ext: string) {
    const subcategories: { name: string, path: string }[] = [];
    for (let i = 1; i <= count; i++) {
      subcategories.push({
        name: `${i}`,
        path: `${i}.${ext}`
      });
    }
    return subcategories;
  }

  private getDependentPaths(count: number, options: FECLoaderBodyChildOptions, ext: string) {
    const subcategories: { name: string, path: string }[] = [];
    for (let i = 1; i <= count; i++) {
      Object.keys(options).forEach((option) => {
        subcategories.push({
          name: `${i}_${option}`,
          path: `${i}_${options[option].path}.${ext}`
        });
      });
    }
    return subcategories;
  }

  /**
   * CUSTOMIZER CONFIG
   */

  generateConfig(
    bodyOptions: FECLoaderBodyConfig,
    config: FECLoaderConfig,
  ) {
    return Object.keys(bodyOptions).map((bodyTypeName) => ({
      bodyType: bodyTypeName,
      title: bodyOptions[bodyTypeName].title,
      config: this.generateConfigForBodyType(bodyTypeName, bodyOptions[bodyTypeName], config)
    }));
  }

  private generateConfigForBodyType(bodyTypeName: string, bodyType: FECLoaderBodyType, config: FECLoaderConfig) {
    return config.menuOrder.map(optionName => {
      const options = bodyType.options;
      const option = options[optionName];
      return this.doOnOptionType(
        option,
        () => { // if boolean
          return this.getToggleOptionConfig(bodyTypeName, optionName, option, config);
        },
        (optionCount) => { // if number
          return this.getStandardOptionConfig(bodyTypeName, optionName, option, config);
        },
        (dependsOn) => { // if object
          return this.getDependentOptionConfig(
            bodyTypeName,
            optionName,
            option,
            dependsOn,
            options[dependsOn].count!,
            config
          );
        },
        () => { // null
          return this.getNullOptionConfig(optionName)
        });

    });
  }

  private getToggleOptionConfig(
    bodyTypeName: string,
    optionName: string,
    option: FECLoaderBodyOptionItem,
    config: FECLoaderConfig
  ) {
    const key = `${config.baseKey} ${bodyTypeName} ${optionName}`
    return {
      ...this.getConfigWithTitle(optionName, option),
      assets: config.assets[key]
    }
  };

  private getStandardOptionConfig(
    bodyTypeName: string,
    optionName: string,
    option: FECLoaderBodyOptionItem,
    config: FECLoaderConfig
  ): FECOptionConfig {
    const result = this.getConfigWithTitle(optionName, option);
    const key = `${config.baseKey} ${bodyTypeName} ${result.name}`;
    return {
      ...result,
      assets: this.getAssetsForType(key, option.count!, config.assets)
    }
  }

  private getNullOptionConfig(
    optionName: string,
  ): FECOptionConfig {
    return {
      ...this.getConfigWithTitle(optionName),
      assets: null,
    }
  }

  private getDependentOptionConfig(
    bodyTypeName: string,
    optionName: string,
    options: FECLoaderBodyOptionItem,
    dependsOn: string,
    numDependsOnOptions: number,
    config: FECLoaderConfig
  ) {
    const result = this.getConfigWithTitle(optionName, options);
    const key = `${config.baseKey} ${bodyTypeName} ${result.name}`;
    const optionList = Object.keys(options.childOptions!);
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

  private getConfigWithTitle(optionName: string, options?: FECLoaderBodyOptionItem) {
    if (!options) {
      return {
        name: optionName,
        title: '--',
        offset: null,
        canBeBlank: true
      }
    }
    const baseConfig = {
      name: optionName,
      title: options.title,
      offset: options.offset,
      canBeBlank: options.canBeBlank || false
    };
    if (options.childOptions) {
      return {
        ...baseConfig,
        optionLabels: Object.values(options.childOptions).map(item => item.title)
      }
    } else {
      return {
        ...baseConfig
      }
    }
  }

  private doOnOptionType(
    option: FECLoaderBodyOptionItem,
    onIfToggleable: () => any,
    onIfNumber: (v: number) => any,
    onIfDependency: (v: string) => any,
    onNullObject?: () => any
  ) {
    if (option?.toggleable) {
      return onIfToggleable();
    } else if (option?.count) {
      return onIfNumber(option.count);
    } else if (option?.dependsOn) {
      return onIfDependency(option.dependsOn);
    } else if (onNullObject) {
      return onNullObject();
    }
  }
}
