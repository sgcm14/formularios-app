import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(
    private http: HttpClient
  ) { }

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value;

  //   const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) =>{
  //     console.log({email});
      
  //     if(email === 'test1@test.com'){
  //       subscriber.next({emailTomado: true});
  //       subscriber.complete();
  //     }

  //     subscriber.next(null);
  //     subscriber.complete();
  //   });

  //   return httpCallObservable;

  // }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
      .pipe(
        delay(3000),
        map(resp => {
          return (resp.length === 0)
            ? null
            : { emailTomado: true }
        }
        )
      )
  }
}
