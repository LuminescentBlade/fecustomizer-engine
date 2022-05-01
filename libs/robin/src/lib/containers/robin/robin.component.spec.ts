import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobinComponent } from './robin.component';

describe('RobinComponent', () => {
  let component: RobinComponent;
  let fixture: ComponentFixture<RobinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RobinComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
