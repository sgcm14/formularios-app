import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosReactiveComponent } from './basicos/basicos.component';
import { DinamicosReactiveComponent } from './dinamicos/dinamicos.component';
import { SwitchesReactiveComponent } from './switches/switches.component';


@NgModule({
  declarations: [
    BasicosReactiveComponent,
    DinamicosReactiveComponent,
    SwitchesReactiveComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
