import { Injectable } from '@angular/core';
import { FECustomizerBodyConfig, FECustomizerConfig, FECustomizerImagePathConfig } from 'libs/fe-customizer-engine/src/lib/models';

enum BodyTypes {
  Female1 = 'female1',
  Female2 = 'female2',
  Male1 = 'male1',
  Male2 = 'male2'
};
enum Options {
  Body = 'body',
  Hair = 'hair',
  HairClip = 'hairClip',
  Features = 'features',
  Sweat = 'sweat',
  Blush = 'blush'
};
enum Expressions {
  Normal = 'normal',
  Smile = 'smile',
  Pained = 'pained',
  Angry = 'angry',
  Indignant = 'indignant'
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private cornKey = 'CORN';
  private cornPath = 'assets/corn';
  // TODO: make the structure of this more modular and reusable and export to a service in the common libarary
  private expressionFileNames: { [key: string]: string } = {
    [Expressions.Normal]: 'normal',
    [Expressions.Smile]: 'smile',
    [Expressions.Pained]: 'pained',
    [Expressions.Angry]: 'angry',
    [Expressions.Indignant]: 'indignant'
  };
  private paths: { [key: string]: string } = {
    [BodyTypes.Female1]: 'female1',
    [BodyTypes.Female2]: 'female2',
    [BodyTypes.Male1]: 'male1',
    [BodyTypes.Male2]: 'male2',
    [Options.Body]: 'body',
    [Options.Hair]: 'hair',
    [Options.HairClip]: 'hairclip',
    [Options.Features]: 'features',
    [Options.Sweat]: 'sweat.png',
    [Options.Blush]: 'blush.png'
  };
  private sharedOptions: { [key: string]: boolean | number } = {
    [Options.Blush]: true,
    [Options.Sweat]: true,
    [Options.Body]: 7,
    [Options.Hair]: 12,
    [Options.Features]: 12
  };
  private titles: any = {
    [BodyTypes.Female1]: 'Female 1',
    [BodyTypes.Female2]: 'Female 2',
    [BodyTypes.Male1]: 'Male 1',
    [BodyTypes.Male2]: 'Male 2',
    [Options.Body]: 'Face',
    [Options.Hair]: 'Hair',
    [Options.HairClip]: 'Hair Clip',
    [Options.Features]: 'Facial Features',
    [Options.Sweat]: 'Sweat',
    [Options.Blush]: 'Blush'
  };
  private bodyOptions: any = {
    [BodyTypes.Female1]: { ...this.sharedOptions, [Options.HairClip]: 5 },
    [BodyTypes.Female2]: { ...this.sharedOptions, [Options.HairClip]: 5 },
    [BodyTypes.Male1]: { ...this.sharedOptions },
    [BodyTypes.Male2]: { ...this.sharedOptions }
  }

  constructor() { }

  configureAssets(): FECustomizerImagePathConfig {
    const subCategories = Object.keys(this.bodyOptions).map(bodyType => {
      const options = this.bodyOptions[bodyType];
      // TODO: this bit can be refactored
      const optionConfig = [];
      for (const option of Object.values(Options)) {
        const optionValue: boolean | number = options[option];
        if (optionValue === true) {
          optionConfig.push({ name: option, path: this.paths[option] });
        } else if (!optionValue) {
          continue;
        } else {
          const optionSubCategories = option === Options.Body ?
            this.getBodypaths(optionValue) :
            this.getGeneralpaths(optionValue);
          optionConfig.push({ name: option, path: this.paths[option], subCategories: optionSubCategories })
        }
      }
      const config: FECustomizerImagePathConfig = {
        name: bodyType,
        path: this.paths[bodyType],
        subCategories: optionConfig
      };
      return config;
    });
    return {
      name: this.cornKey,
      path: this.cornPath,
      subCategories
    }
  }

  generateConfig(assets: { [key: string]: HTMLImageElement }) {
    return Object.values(BodyTypes).map((bodyType) => ({
      bodyType: bodyType,
      title: this.titles[bodyType],
      config: this.generateConfigForBodyType(bodyType, assets)
    }));
  }

  generateConfigForBodyType(bodyType: string, assets: any) {
    const bodyOption = this.getStandardOptionConfig(Options.Body, bodyType, assets);
    const hairOption = this.getStandardOptionConfig(Options.Hair, bodyType, assets); // do color
    const hairClipOption = this.getStandardOptionConfig(Options.HairClip, bodyType, assets);
    const featuresOption = this.getStandardOptionConfig(Options.Features, bodyType, assets);
    // TODO: toggle options + dependency options
    return [bodyOption, hairOption, hairClipOption, featuresOption];
  }

  getStandardOptionConfig(option: string, bodyType: string, assets: any, config = {}) {
    const key = `${this.cornKey} ${bodyType} ${option}`;
    return {
      ...config,
      name: option,
      title: this.titles[option],
      assets: this.getAssetsForType(key, this.bodyOptions[bodyType][option], assets)
    }
  }

  getAssetsForType(parentKey: string, count: number, assets: any, suffixes?: string[]) {
    if (!count) {
      return null;
    }
    const items: HTMLImageElement[] = [];
    for (let i = 1; i <= count; i++) {
      if (!suffixes?.length) {
        const key = `${parentKey} ${i}`;
        items.push(assets[key]);
      } else {
        suffixes.forEach(suffix => {
          const key = `${parentKey} ${i}_${suffix}`;
          items.push(assets[key]);
        });
      }
    }
    return items;
  };

  getGeneralpaths(count: number) {
    const subcategories = [];
    for (let i = 1; i <= count; i++) {
      subcategories.push({
        name: `${i}`,
        path: `${i}.png`
      });
    }
    return subcategories;
  }

  getBodypaths(count: number) {
    const subcategories = [];
    for (let i = 1; i <= count; i++) {
      subcategories.push({
        name: `${i}`,
        path: `${i}.png`
      });
      Object.keys(this.expressionFileNames).forEach((expression) => {
        subcategories.push({
          name: `${i}_${expression}`,
          path: `${i}_${this.expressionFileNames[expression]}.png`
        });
      });
    }
    return subcategories;
  }
}
