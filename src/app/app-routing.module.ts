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
	},
	{
		path: 'profil',
		loadChildren: () => import('src/app/pages/profil/profil.module').then(m => m.ProfilModule)
	},
	{
		path: 'map',
		loadChildren: () => import('src/app/pages/map/map.module').then(m => m.MapModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
