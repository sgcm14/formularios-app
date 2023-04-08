import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { emailPattern, noPuedeSerStrider, nombreApellidoPattern } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  }, {
    validators: [this.validatorService.camposIguales('password', 'password2')]
  } as AbstractControlOptions);

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.['required']) {
      return 'Email es obligatorio';
    } else if (errors?.['pattern']) {
      return 'El valor ingresado no tiene formato de correo';
    } else if (errors?.['emailTomado']) {
      return 'El email ya fue tomado';
    }
    return '';
  }

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Sammy Cantoral',
      email: 'test1@test.com',
      username: 'sgcm14',
      password: '123456',
      password2: '123456',
    });
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;
  }

  emailRequired() {
    return this.miFormulario.get('email')?.errors?.['required']
      && this.miFormulario.get('email')?.touched;
  }

  emailFormat() {
    return this.miFormulario.get('email')?.errors?.['pattern']
      && this.miFormulario.get('email')?.touched;
  }

  emailTomado() {
    return this.miFormulario.get('email')?.errors?.['emailTomado']
      && this.miFormulario.get('email')?.touched;
  }

  submitFormulario() {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }
}
