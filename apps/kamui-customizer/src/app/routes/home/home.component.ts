import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fecustomizer-engine-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public links = [
    {
      title: 'KamuiCustomizer',
      path: 'kamui',
      image: './assets/ui/home/corn.png'
    },{
      title: 'RobinCustomizer',
      path: 'robin',
      image: './assets/ui/home/robin.png'
    }
  ];
  constructor() {}

  ngOnInit(): void {
    window.parent.postMessage('customizer-home', '*');
  }
}
