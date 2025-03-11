import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAttributesComponent } from './item-attributes.component';

describe('ItemAttributesComponent', () => {
  let component: ItemAttributesComponent;
  let fixture: ComponentFixture<ItemAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemAttributesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
