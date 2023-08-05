import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizationSettingsRoutingModule } from './localization-settings-routing.module';
import { LocalizationSettingsComponent } from './localization-settings.component';


@NgModule({
  declarations: [
    LocalizationSettingsComponent
  ],
  imports: [
    CommonModule,
    LocalizationSettingsRoutingModule
  ]
})
export class LocalizationSettingsModule { }
