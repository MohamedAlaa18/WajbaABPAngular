import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemAttributesComponent } from './add-item-attributes.component';

describe('AddItemAttributesComponent', () => {
  let component: AddItemAttributesComponent;
  let fixture: ComponentFixture<AddItemAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItemAttributesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
