import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsSelectComponent } from './options-select.component';

describe('OptionsSelectorComponent', () => {
  let component: OptionsSelectComponent;
  let fixture: ComponentFixture<OptionsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionsSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
