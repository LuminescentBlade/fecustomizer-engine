import { Injectable } from '@angular/core';
import { LoaderService, loadImagesFromLocal } from 'fe-customizer-engine';
import { FECBodyConfig, FECBodyOptionItem, FECBodyOptions, FECConfig, FECImageCache, FECImagePathConfig, FECOptionTitles } from 'libs/fe-customizer-engine/src/lib/models';

enum BodyTypes {
  Female1 = 'b_female1',
  Female2 = 'b_female2',
  Male1 = 'b_male1',
  Male2 = 'b_male2'
};
enum Options {
  Body = 'o_body',
  Hair = 'o_hair',
  HairClip = 'o_hairclip',
  Features = 'o_features',
  Expressions = 'o_expressions',
  Sweat = 'o_sweat',
  Blush = 'o_blush'
};
enum Expressions {
  Normal = 'e_normal',
  Smile = 'e_smile',
  Pained = 'e_pained',
  Angry = 'e_angry',
  Indignant = 'e_indignant'
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private cornKey = 'CORN';
  private cornPath = 'assets/corn';
  private ext = '.png';
  // TODO: make the structure of this more modular and reusable and export to a service in the common libarary
  private paths: { [key: string]: string } = {
    [BodyTypes.Female1]: 'female1',
    [BodyTypes.Female2]: 'female2',
    [BodyTypes.Male1]: 'male1',
    [BodyTypes.Male2]: 'male2',
    [Options.Body]: 'body',
    [Options.Hair]: 'hair',
    [Options.HairClip]: 'hairclip',
    [Options.Features]: 'features',
    [Options.Sweat]: 'sweat',
    [Options.Blush]: 'blush',
    [Options.Expressions]: 'body',
    [Expressions.Normal]: 'normal',
    [Expressions.Smile]: 'smile',
    [Expressions.Pained]: 'pained',
    [Expressions.Angry]: 'angry',
    [Expressions.Indignant]: 'indignant'
  };
  private sharedOptions: FECBodyOptionItem = {
    [Options.Blush]: true,
    [Options.Sweat]: true,
    [Options.Body]: 7,
    [Options.Hair]: 12,
    [Options.Features]: 12,
    [Options.Expressions]: { dependsOn: Options.Body, options: Object.values(Expressions) }
  };
  private titles: FECOptionTitles = {
    bodyTypes: {
      [BodyTypes.Female1]: 'Female 1',
      [BodyTypes.Female2]: 'Female 2',
      [BodyTypes.Male1]: 'Male 1',
      [BodyTypes.Male2]: 'Male 2',
    },
    options: {
      [Options.Body]: 'Face',
      [Options.Hair]: 'Hair',
      [Options.HairClip]: 'Hair Clip',
      [Options.Features]: 'Facial Features',
      [Options.Expressions]: {
        title: 'Expressions',
        children: {
          [Expressions.Normal]: 'Default',
          [Expressions.Smile]: 'Smile',
          [Expressions.Pained]: 'Pained',
          [Expressions.Angry]: 'Angry',
          [Expressions.Indignant]: 'Indignant'
        }
      },
      [Options.Sweat]: 'Sweat',
      [Options.Blush]: 'Blush'
    }

  };
  private bodyOptions: any = {
    [BodyTypes.Female1]: { ...this.sharedOptions, [Options.HairClip]: 5 },
    [BodyTypes.Female2]: { ...this.sharedOptions, [Options.HairClip]: 5 },
    [BodyTypes.Male1]: { ...this.sharedOptions },
    [BodyTypes.Male2]: { ...this.sharedOptions }
  }

  constructor(private loader: LoaderService) { }

  async getConfig() {
    const assetConfig = this.configureAssets();
    const assets = await loadImagesFromLocal(assetConfig);
    return this.generateConfig(assets);
  }

  configureAssets() {
    return this.loader.generateImagePathConfig(
      {
        name: this.cornKey,
        path: this.cornPath,
      },
      this.bodyOptions,
      this.paths,
      this.ext
    );
  }

  generateConfig(assets: FECImageCache) {
    return this.loader.generateConfig(
      this.bodyOptions,
      {
        baseKey: this.cornKey,
        assets,
        titles: this.titles,
        menuOrder: Object.values(Options)
      }
    )
  }
}
