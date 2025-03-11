import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCategoriesDetailsComponent } from './item-categories-details.component';

describe('ItemCategoriesDetailsComponent', () => {
  let component: ItemCategoriesDetailsComponent;
  let fixture: ComponentFixture<ItemCategoriesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCategoriesDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCategoriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
