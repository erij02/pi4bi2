import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManagerGeantComponent } from './sales-manager-geant.component';

describe('SalesManagerGeantComponent', () => {
  let component: SalesManagerGeantComponent;
  let fixture: ComponentFixture<SalesManagerGeantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesManagerGeantComponent]
    });
    fixture = TestBed.createComponent(SalesManagerGeantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
