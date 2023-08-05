import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemSettingsRoutingModule } from './system-settings-routing.module';
import { SystemSettingsComponent } from './system-settings.component';


@NgModule({
  declarations: [
    SystemSettingsComponent
  ],
  imports: [
    CommonModule,
    SystemSettingsRoutingModule
  ]
})
export class SystemSettingsModule { }
