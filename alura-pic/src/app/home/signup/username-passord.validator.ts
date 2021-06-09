import { FormGroup, ValidatorFn } from "@angular/forms";


export const userNamePasswordValidator : ValidatorFn = (formGroup: FormGroup) =>{

  const userName = formGroup.get('userName').value;
  const password = formGroup.get('password').value;

  if (userName.trim() + password.trim()) {
    return userName != password ? null
    : { userNamePasswordValidator : true };
  } else {
    return null;
  }


}