import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendSettingsRoutingModule } from './frontend-settings-routing.module';
import { FrontendSettingsComponent } from './frontend-settings.component';


@NgModule({
  declarations: [
    FrontendSettingsComponent
  ],
  imports: [
    CommonModule,
    FrontendSettingsRoutingModule
  ]
})
export class FrontendSettingsModule { }
