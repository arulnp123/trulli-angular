import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelect2Module } from 'ng-select2';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NgxDropzoneModule,
    NgbModule,
    NgSelect2Module,
  ],
})
export class SettingsModule {}
