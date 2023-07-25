import { Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FECConfigLoad, FileService } from 'fe-customizer-engine';
import { Observable, Subscription } from 'rxjs';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'fecustomizer-engine-kamui',
  templateUrl: './kamui.component.html',
  styleUrls: ['./kamui.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KamuiComponent implements OnInit, OnDestroy {
  @HostBinding('class.kamui-customizer') baseClass = true;
  public config: FECConfigLoad;
  
  private image: string;
  private configSubscription: Subscription;
  private config$: Observable<any>;

  constructor(
    private configService: ConfigService, 
    private fileService: FileService
  ) { }

  ngOnInit() {
    window.parent.postMessage('customizer-kamui', '*');
    this.config$ = this.configService.getCorrinConfig();
    // normally I would use async pipe but since im also caching the value
    this.configSubscription = this.config$.subscribe(config => {
      this.config = config;
      if (config.complete === 1) {
        this.configService.cacheCorn(config);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.configSubscription) {
      this.configSubscription.unsubscribe();
    }
  }

  setImage(image: string){
    this.image = image;
  }
  save(){
    this.fileService.save(this.image, 'corn.png');
  }
}
