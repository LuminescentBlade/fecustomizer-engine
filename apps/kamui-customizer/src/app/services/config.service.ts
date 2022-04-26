import { Injectable } from '@angular/core';
import { LoaderService, FECLoaderBodyConfig, FECLoaderOptions } from 'fe-customizer-engine';

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
  private ext = 'png';
  private options = {
    [Options.Body]: {
      title: 'Face',
      count: 7,
      path: 'body'
    },
    [Options.Hair]: {
      title: 'Hair',
      count: 12,
      path: 'hair'
    },
    [Options.HairClip]: {
      title: 'Hair Clip',
      count: 5,
      path: 'hairclip',
      canBeBlank: true
    },
    [Options.Features]: {
      title: 'Facial Features',
      count: 12,
      path: 'features',
      canBeBlank: true
    },
    [Options.Expressions]: {
      title: 'Expressions',
      path: 'body',
      childOptions: {
        [Expressions.Normal]: {
          title: 'Default',
          path: 'normal'
        },
        [Expressions.Smile]: {
          title: 'Smile',
          path: 'smile'
        },
        [Expressions.Pained]: {
          title: 'Pained',
          path: 'pained'
        },
        [Expressions.Angry]: {
          title: 'Angry',
          path: 'angry'
        },
        [Expressions.Indignant]: {
          title: 'Indignant',
          path: 'indignant'
        }
      },
      dependsOn: Options.Body
    },
    [Options.Sweat]: {
      title: 'Sweat',
      path: 'sweat',
      toggleable: true,
    },
    [Options.Blush]: {
      title: 'Blush',
      path: 'blush',
      toggleable: true
    }
  };

  private bodyOptions: FECLoaderBodyConfig = {
    [BodyTypes.Female1]: {
      title: 'Female 1',
      path: 'female1',
      offset: { x: 0, y: 0 },
      options: {
        [Options.Body]: { ...this.options[Options.Body], offset: { x: 0, y: 0 } },
        [Options.Hair]: { ...this.options[Options.Hair], offset: { x: 0, y: 0 } },
        [Options.HairClip]: { ...this.options[Options.HairClip], offset: { x: 0, y: 0 } },
        [Options.Features]: { ...this.options[Options.Features], offset: { x: 0, y: 0 } },
        [Options.Expressions]: { ...this.options[Options.Expressions], offset: { x: 0, y: 0 } },
        [Options.Sweat]: { ...this.options[Options.Sweat], offset: { x: 0, y: 0 } },
        [Options.Blush]: { ...this.options[Options.Blush], offset: { x: 0, y: 0 } }
      },
    },
    [BodyTypes.Female2]: {
      title: 'Female 2',
      path: 'female2',
      offset: { x: 0, y: 0 },
      options: {
        [Options.Body]: { ...this.options[Options.Body], offset: { x: 0, y: 0 } },
        [Options.Hair]: { ...this.options[Options.Hair], offset: { x: 0, y: 0 } },
        [Options.HairClip]: { ...this.options[Options.HairClip], offset: { x: 0, y: 0 } },
        [Options.Features]: { ...this.options[Options.Features], offset: { x: 0, y: 0 } },
        [Options.Expressions]: { ...this.options[Options.Expressions], offset: { x: 0, y: 0 } },
        [Options.Sweat]: { ...this.options[Options.Sweat], offset: { x: 0, y: 0 } },
        [Options.Blush]: { ...this.options[Options.Blush], offset: { x: 0, y: 0 } }
      }
    },
    [BodyTypes.Male1]: {
      title: 'Male 1',
      path: 'male1',
      offset: { x: 0, y: 0 },
      options: {
        [Options.Body]: { ...this.options[Options.Body], offset: { x: 0, y: 0 } },
        [Options.Hair]: { ...this.options[Options.Hair], offset: { x: 0, y: 0 } },
        [Options.Features]: { ...this.options[Options.Features], offset: { x: 0, y: 0 } },
        [Options.Expressions]: { ...this.options[Options.Expressions], offset: { x: 0, y: 0 } },
        [Options.Sweat]: { ...this.options[Options.Sweat], offset: { x: 0, y: 0 } },
        [Options.Blush]: { ...this.options[Options.Blush], offset: { x: 0, y: 0 } }
      }
    },
    [BodyTypes.Male2]: {
      title: 'Male2',
      path: 'male2',
      offset: { x: 0, y: 0 },
      options: {
        [Options.Body]: { ...this.options[Options.Body], offset: { x: 0, y: 0 } },
        [Options.Hair]: { ...this.options[Options.Hair], offset: { x: 0, y: 0 } },
        [Options.Features]: { ...this.options[Options.Features], offset: { x: 0, y: 0 } },
        [Options.Expressions]: { ...this.options[Options.Expressions], offset: { x: 0, y: 0 } },
        [Options.Sweat]: { ...this.options[Options.Sweat], offset: { x: 0, y: 0 } },
        [Options.Blush]: { ...this.options[Options.Blush], offset: { x: 0, y: 0 } }
      }
    }
  }

  private inputConfig: FECLoaderOptions = {
    rootKey: this.cornKey,
    rootPath: this.cornPath,
    imageType: this.ext,
    menuOrder: Object.values(Options),
    bodyOptions: this.bodyOptions
  };

  constructor(private loader: LoaderService) { }

  async getConfig() {
    return this.loader.getConfig(this.inputConfig);
  }
}
