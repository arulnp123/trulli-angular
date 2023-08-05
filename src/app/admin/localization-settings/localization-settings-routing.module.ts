import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizationSettingsComponent } from './localization-settings.component';

const routes: Routes = [{ path: '', component: LocalizationSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalizationSettingsRoutingModule { }
