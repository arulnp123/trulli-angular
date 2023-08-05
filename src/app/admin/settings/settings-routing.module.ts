import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';

import { SettingsComponent  } from './settings.component';

const routes: Routes = [
	{	path : '',component : SettingsComponent,
		children: [
			{
				path: 'general-settings', component: GeneralSettingsComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
