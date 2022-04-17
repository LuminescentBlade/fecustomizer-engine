import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerRendererComponent } from './layer-renderer.component';

describe('LayerRendererComponent', () => {
  let component: LayerRendererComponent;
  let fixture: ComponentFixture<LayerRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayerRendererComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
