import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManagerTouringComponent } from './sales-manager-touring.component';

describe('SalesManagerTouringComponent', () => {
  let component: SalesManagerTouringComponent;
  let fixture: ComponentFixture<SalesManagerTouringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesManagerTouringComponent]
    });
    fixture = TestBed.createComponent(SalesManagerTouringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
