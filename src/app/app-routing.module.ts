import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'bins',
		loadChildren: () => import('src/app/pages/bins/bins.module').then(m => m.BinsModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
