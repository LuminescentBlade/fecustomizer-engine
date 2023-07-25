import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FECConfigLoad, FileService } from 'fe-customizer-engine';
import { Subscription, Observable } from 'rxjs';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'fecustomizer-engine-robin',
  templateUrl: './robin.component.html',
  styleUrls: ['./robin.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RobinComponent implements OnInit {
  @HostBinding('class.robin-customizer') baseClass = true;
  public config: FECConfigLoad;

  private image: string;
  private configSubscription: Subscription;
  private config$: Observable<any>;

  constructor(
    private configService: ConfigService,
    private fileService: FileService
  ) { }

  ngOnInit() {
    window.parent.postMessage('customizer-robin', '*');
    this.config$ = this.configService.getRobinConfig();
    this.configSubscription = this.config$.subscribe(config => {
      this.config = config;
      if (config.complete === 1) {
        this.configService.cacheRobin(config);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.configSubscription) {
      this.configSubscription.unsubscribe();
    }
  }

  setImage(image: string) {
    this.image = image;
  }
  save() {
    this.fileService.save(this.image, 'robin.png');
  }
}
