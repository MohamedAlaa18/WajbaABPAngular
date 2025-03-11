import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCategoriesComponent } from './item-categories.component';

describe('ItemCategoriesComponent', () => {
  let component: ItemCategoriesComponent;
  let fixture: ComponentFixture<ItemCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
