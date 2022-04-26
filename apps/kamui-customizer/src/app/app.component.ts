import { Component, OnInit } from '@angular/core';
import { loadImagesFromLocal } from 'fe-customizer-engine';
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
    this.config = await this.configService.getConfig();
    console.log(this.config);
  }
}
