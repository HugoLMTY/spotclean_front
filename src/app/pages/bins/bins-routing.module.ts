import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinsComponent } from './bins.component';

const routes: Routes = [
	{ path: '', component: BinsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BinsRoutingModule { }
