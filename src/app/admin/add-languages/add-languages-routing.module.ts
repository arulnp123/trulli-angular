import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLanguagesComponent } from './add-languages.component';

const routes: Routes = [{ path: '', component: AddLanguagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddLanguagesRoutingModule { }
