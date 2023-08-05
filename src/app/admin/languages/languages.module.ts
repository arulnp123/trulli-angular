import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguagesRoutingModule } from './languages-routing.module';
import { LanguagesComponent } from './languages.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    LanguagesComponent
  ],
  imports: [
    CommonModule,
    LanguagesRoutingModule,
    DataTablesModule
  ]
})
export class LanguagesModule { }
