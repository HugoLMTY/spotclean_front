import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BinsRoutingModule } from './bins-routing.module';
import { BinsComponent } from './bins.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    BinsComponent
  ],
  imports: [
    CommonModule,
    BinsRoutingModule,
	ComponentsModule,
  ]
})
export class BinsModule { }
