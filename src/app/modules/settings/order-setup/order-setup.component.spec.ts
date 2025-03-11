import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSetupComponent } from './order-setup.component';

describe('OrderSetupComponent', () => {
  let component: OrderSetupComponent;
  let fixture: ComponentFixture<OrderSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
