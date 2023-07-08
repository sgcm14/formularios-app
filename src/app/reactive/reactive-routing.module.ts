import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosReactiveComponent } from './basicos/basicos.component';
import { DinamicosReactiveComponent } from './dinamicos/dinamicos.component';
import { SwitchesReactiveComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basicos', component: BasicosReactiveComponent },
      { path: 'dinamicos', component: DinamicosReactiveComponent },
      { path: 'switches', component: SwitchesReactiveComponent },
      { path: '**', redirectTo: 'basicos' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ReactiveRoutingModule { }
