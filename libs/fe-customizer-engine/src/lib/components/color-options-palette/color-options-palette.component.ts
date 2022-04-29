import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fec-color-options-palette',
  templateUrl: './color-options-palette.component.html',
  styleUrls: ['./color-options-palette.component.scss'],
})
export class ColorOptionsPaletteComponent implements OnInit {
  @HostBinding('class.color-options-palette') baseClass = true;
  @HostBinding('class.color-options-palette--disabled') @Input() disabled = false;
  @Input() colors: string[];
  @Input() index: number;
  @Input() title: string;
  @Output() indexSelected = new EventEmitter<number>();


  @HostListener('document:mousedown', ['$event'])
  onClickOutside(event: Event): void {
     if (!this.element.nativeElement.contains(event.target)) {
        // clicked outside => close color palette
     this.showPalette = false;
     }
  }

  @HostListener('keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent): void {
     this.showPalette = false;
  }

  public showPalette = false;
  constructor(private element: ElementRef) {}

  ngOnInit(): void {}
}
