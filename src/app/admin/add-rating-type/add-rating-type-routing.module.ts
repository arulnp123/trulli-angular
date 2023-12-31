import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRatingTypeComponent } from './add-rating-type.component';

const routes: Routes = [
	{
		path : '',
		component : AddRatingTypeComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRatingTypeRoutingModule { }
