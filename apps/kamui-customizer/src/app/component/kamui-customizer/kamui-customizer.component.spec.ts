import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamuiCustomizerComponent } from './kamui-customizer.component';

describe('KamuiCustomizerComponent', () => {
  let component: KamuiCustomizerComponent;
  let fixture: ComponentFixture<KamuiCustomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KamuiCustomizerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KamuiCustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
