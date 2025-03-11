import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCategoriesComponent } from './item-categories/item-categories.component';
import { ItemCategoriesDetailsComponent } from './item-categories-details/item-categories-details.component';

const routes: Routes = [
  { path: '', component: ItemCategoriesComponent }, // Matches '/settings/item-categories'
  { path: ':id', component: ItemCategoriesDetailsComponent }, // Matches '/settings/item-categories/:id'
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemCategoriesRoutingModule { }
