import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManagerCarrefourComponent } from './sales-manager-carrefour.component';

describe('SalesManagerCarrefourComponent', () => {
  let component: SalesManagerCarrefourComponent;
  let fixture: ComponentFixture<SalesManagerCarrefourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesManagerCarrefourComponent]
    });
    fixture = TestBed.createComponent(SalesManagerCarrefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
