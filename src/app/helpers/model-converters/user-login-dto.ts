import { FormGroup } from "@angular/forms";
import { UserLoginDto } from "../../services/auth/auth.service";

export class UserLoginDtoConverter {
  public static convertFormGroup(formGroup: FormGroup): UserLoginDto {
    return {
      email: formGroup.controls['email'].value,
      password: formGroup.controls['password'].value
    } as UserLoginDto;
  }
}
