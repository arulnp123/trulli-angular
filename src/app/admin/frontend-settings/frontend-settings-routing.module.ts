import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendSettingsComponent } from './frontend-settings.component';

const routes: Routes = [{ path: '', component: FrontendSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendSettingsRoutingModule { }
