import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManagerMgComponent } from './sales-manager-mg.component';

describe('SalesManagerMgComponent', () => {
  let component: SalesManagerMgComponent;
  let fixture: ComponentFixture<SalesManagerMgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesManagerMgComponent]
    });
    fixture = TestBed.createComponent(SalesManagerMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
