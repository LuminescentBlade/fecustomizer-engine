import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamuiComponent } from './kamui.component';

describe('KamuiComponent', () => {
  let component: KamuiComponent;
  let fixture: ComponentFixture<KamuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KamuiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KamuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
