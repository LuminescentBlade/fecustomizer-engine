import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorOptionsPaletteComponent } from './color-options-palette.component';

describe('ColorOptionsPaletteComponent', () => {
  let component: ColorOptionsPaletteComponent;
  let fixture: ComponentFixture<ColorOptionsPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorOptionsPaletteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorOptionsPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
