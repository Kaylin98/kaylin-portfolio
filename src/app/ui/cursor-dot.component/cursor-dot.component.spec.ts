import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorDotComponent } from './cursor-dot.component';

describe('CursorDotComponent', () => {
  let component: CursorDotComponent;
  let fixture: ComponentFixture<CursorDotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursorDotComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CursorDotComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
