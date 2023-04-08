import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  constructor() { }

  persona = {
    genero: '',
    notificaciones: false,
  }

  terminosYcondiciones = false;
}
