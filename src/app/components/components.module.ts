import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TrashComponent } from './trash/trash.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
	RouterModule
  ],
  declarations: [
	  NavbarComponent,
	  TrashComponent,
  ],
  exports: [
	  NavbarComponent,
	  TrashComponent
  ]
})
export class ComponentsModule { }
