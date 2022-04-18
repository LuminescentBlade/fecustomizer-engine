import { Component, OnInit } from '@angular/core';
import { loadImagesFromLocal } from 'fe-customizer-engine';
import { FECustomizerImagePathConfig } from 'libs/fe-customizer-engine/src/lib/models';
import { ConfigService } from './services/config.service';
@Component({
  selector: 'kamui-customizer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public config: any;

  constructor(private configService: ConfigService) { }

  async ngOnInit() {
    const assetsConfig = this.configService.configureAssets();
    //TODO: offload on to webworker?
    const assets = await loadImagesFromLocal(assetsConfig);
    console.log(assets);
    this.config = this.configService.generateConfig(assets);
    console.log(this.config);
  }

}
