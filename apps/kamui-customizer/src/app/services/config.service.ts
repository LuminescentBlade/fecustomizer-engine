import { Injectable } from '@angular/core';
import { LoaderService } from 'fe-customizer-engine';
import { FECustomizerBodyConfig, FECustomizerBodyOptionItem, FECustomizerBodyOptions, FECustomizerConfig, FECustomizerImagePathConfig } from 'libs/fe-customizer-engine/src/lib/models';

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
  Expressions = 'expressions',
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
  private sharedOptions: FECustomizerBodyOptionItem = {
    [Options.Blush]: true,
    [Options.Sweat]: true,
    [Options.Body]: 7,
    [Options.Hair]: 12,
    [Options.Features]: 12,
    [Options.Expressions]: { dependsOn: Options.Body, options: Object.values(Expressions) }
  };
  private titles: any = {
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
}
