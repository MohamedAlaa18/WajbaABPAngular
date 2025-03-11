import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemCategoriesComponent } from './add-item-categories.component';

describe('AddItemCategoriesComponent', () => {
  let component: AddItemCategoriesComponent;
  let fixture: ComponentFixture<AddItemCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItemCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
