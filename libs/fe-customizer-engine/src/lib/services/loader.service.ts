import { Injectable } from '@angular/core';
import { FECustomizerBodyOptions, FECustomizerImagePathConfig, FECustomizerLoadBase, FECustomizerOptionTitles, FECustomizerPathMap } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  generateImagePathConfig(
    base: FECustomizerLoadBase,
    bodyOptions: FECustomizerBodyOptions,
    paths: FECustomizerPathMap,
    ext: string
  ): FECustomizerImagePathConfig {
    const subCategories = Object.keys(bodyOptions).map(bodyType => {
      const options = bodyOptions[bodyType];
      const optionConfig = [];
      for (const option of Object.keys(options)) {
        const optionValue = options[option];
        if (typeof optionValue === 'boolean') {
          optionConfig.push({ name: option, path: `${paths[option]}${ext}` });
        } else if (typeof optionValue === 'number') {
          const optionSubCategories = this.getGeneralPaths(optionValue, ext);
          optionConfig.push({ name: option, path: paths[option], subCategories: optionSubCategories })
        } else if (optionValue) { // if not true or number it's the dependencies case
          const dependsOn = optionValue.dependsOn;
          const dependsOnConfig = options[dependsOn];
          if (typeof dependsOnConfig === 'object') {
            throw Error('do this shit later');
          }
          const optionSubCategories = this.getDependentPaths(
            dependsOnConfig,
            optionValue.options,
            ext,
            paths
          );
          optionConfig.push({ name: option, path: paths[option], subCategories: optionSubCategories })
        }
      }
      const config: FECustomizerImagePathConfig = {
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

  getGeneralPaths(count: number, ext: string) {
    const subcategories: { name: string, path: string }[] = [];
    for (let i = 1; i <= count; i++) {
      subcategories.push({
        name: `${i}`,
        path: `${i}${ext}`
      });
    }
    return subcategories;
  }

  getDependentPaths(count: number | boolean, options: string[], ext: string, paths: FECustomizerPathMap,) {
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
}

//
  // generateConfig(assets: { [key: string]: HTMLImageElement }) {
  //   return Object.values(BodyTypes).map((bodyType) => ({
  //     bodyType: bodyType,
  //     title: this.titles[bodyType],
  //     config: this.generateConfigForBodyType(bodyType, assets)
  //   }));
  // }

  // generateConfigForBodyType(bodyType: string, assets: any) {
  //   const bodyOption = this.getStandardOptionConfig(Options.Body, bodyType, assets);
  //   const hairOption = this.getStandardOptionConfig(Options.Hair, bodyType, assets); // do color
  //   const hairClipOption = this.getStandardOptionConfig(Options.HairClip, bodyType, assets);
  //   const featuresOption = this.getStandardOptionConfig(Options.Features, bodyType, assets);
  //   // TODO: toggle options + dependency options
  //   return [bodyOption, hairOption, hairClipOption, featuresOption];
  // }

  // getStandardOptionConfig(option: string, bodyType: string, assets: any, config = {}) {
  //   const key = `${this.cornKey} ${bodyType} ${option}`;
  //   return {
  //     ...config,
  //     name: option,
  //     title: this.titles[option],
  //     assets: this.getAssetsForType(key, this.bodyOptions[bodyType][option], assets)
  //   }
  // }

  // getAssetsForType(parentKey: string, count: number, assets: any, suffixes?: string[]) {
  //   if (!count) {
  //     return null;
  //   }
  //   const items: HTMLImageElement[] = [];
  //   for (let i = 1; i <= count; i++) {
  //     if (!suffixes?.length) {
  //       const key = `${parentKey} ${i}`;
  //       items.push(assets[key]);
  //     } else {
  //       suffixes.forEach(suffix => {
  //         const key = `${parentKey} ${i}_${suffix}`;
  //         items.push(assets[key]);
  //       });
  //     }
  //   }
  //   return items;
  // };


