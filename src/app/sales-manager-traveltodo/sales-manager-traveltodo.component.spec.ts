import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManagerTraveltodoComponent } from './sales-manager-traveltodo.component';

describe('SalesManagerTraveltodoComponent', () => {
  let component: SalesManagerTraveltodoComponent;
  let fixture: ComponentFixture<SalesManagerTraveltodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesManagerTraveltodoComponent]
    });
    fixture = TestBed.createComponent(SalesManagerTraveltodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
