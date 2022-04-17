import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsSelectorComponent } from './options-selector.component';

describe('OptionsSelectorComponent', () => {
  let component: OptionsSelectorComponent;
  let fixture: ComponentFixture<OptionsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionsSelectorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
