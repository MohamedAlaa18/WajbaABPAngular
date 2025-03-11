import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemAttributesComponent } from './item-attributes/item-attributes.component';
import { ItemCategoriesDetailsComponent } from '../item-categories/item-categories-details/item-categories-details.component';

const routes: Routes = [
  { path: '', component: ItemAttributesComponent }, // Matches '/settings/item-attributes'
  { path: ':id', component: ItemCategoriesDetailsComponent }, // Matches '/settings/item-attributes/:id'
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemAttributesRoutingModule { }
