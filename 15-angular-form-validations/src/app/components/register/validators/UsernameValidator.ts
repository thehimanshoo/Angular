import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidator {

  static regExpValidator(control : AbstractControl):ValidationErrors | any{
     let regExp = /^[a-zA-Z0-9_]{3,16}$/;
     if(regExp.test(control.value)){
       return null;
     }
     return { regExpValidator : true }
  }
}
