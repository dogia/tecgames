import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule { }
