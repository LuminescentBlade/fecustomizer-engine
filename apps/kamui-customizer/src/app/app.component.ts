import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './services/config.service';
@Component({
  selector: 'kamui-customizer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public config$: Observable<any>;

  constructor(private configService: ConfigService) { }

  async ngOnInit() {
    this.config$ = this.configService.getCorrinConfig();
  }
}
