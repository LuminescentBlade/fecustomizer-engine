import { Component, HostBinding, OnInit } from '@angular/core';
@Component({
  selector: 'kamui-customizer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('class.fe-customizer-app') baseClass = true;
  constructor() { }
}
