import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesReactiveComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    });

    //obtener el valor de un solo campo en tiempo real
    // this.miFormulario.get('condiciones')?.valueChanges.subscribe(newValue =>{
    //   console.log(newValue);
    // });

    // lo de aqui abajo son iguales, uno es refactorizado
    this.miFormulario.valueChanges.subscribe(form => {
      console.log(form);
      delete form.condiciones;
      this.persona = form;
    });

    this.miFormulario.valueChanges.subscribe(({ condiciones, ...rest }) => {
      console.log(rest);
      // delete form.condiciones;
      this.persona = rest;
    })
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };
    console.log(formValue);
    delete formValue.condiciones;

    this.persona = formValue;
  }

}
