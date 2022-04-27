import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fec-options-select',
  templateUrl: './options-select.component.html',
  styleUrls: ['./options-select.component.scss'],
})
export class OptionsSelectComponent implements OnInit {
  @HostBinding('class.fec-options-select')
  @HostBinding('class.fec-options-select--disabled') @Input() disabled = false;
  @Input() title: string = '--';
  @Input() value: number;
  @Input() min: number;
  @Input() max: number;
  @Output() valueChange = new EventEmitter<number>();
  
  constructor() {}

  ngOnInit(): void {}

  next(){
    let nextVal = this.value + 1;
    if(nextVal > this.max){
      nextVal = this.min;
    }
    this.valueChange.emit(nextVal);
  }

  previous(){
    let prevVal = this.value - 1;
    if(prevVal < this.min){
      prevVal = this.max;
    }
    this.valueChange.emit(prevVal);
  }
}
