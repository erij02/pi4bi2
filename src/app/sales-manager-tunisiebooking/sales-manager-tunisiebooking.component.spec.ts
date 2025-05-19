import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManagerTunisiebookingComponent } from './sales-manager-tunisiebooking.component';

describe('SalesManagerTunisiebookingComponent', () => {
  let component: SalesManagerTunisiebookingComponent;
  let fixture: ComponentFixture<SalesManagerTunisiebookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesManagerTunisiebookingComponent]
    });
    fixture = TestBed.createComponent(SalesManagerTunisiebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
