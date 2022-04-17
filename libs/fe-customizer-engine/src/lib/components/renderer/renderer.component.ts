import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fec-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss'],
})
export class RendererComponent implements OnInit {
  @Input() config: any;
  constructor() {}

  ngOnInit(): void {}
}
