import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddLanguagesRoutingModule } from './add-languages-routing.module';
import { AddLanguagesComponent } from './add-languages.component';


@NgModule({
  declarations: [
    AddLanguagesComponent
  ],
  imports: [
    CommonModule,
    AddLanguagesRoutingModule
  ]
})
export class AddLanguagesModule { }
