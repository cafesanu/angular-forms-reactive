// import { FormControlTyped } from 'src/models/form-control-typed';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

interface IUsedData {
  username: string;
  email: string;
}
interface ISignUpForm {
  userData: IUsedData;
  gender: string;
  hobbies: string[];
}

interface IForbiddenEmail {
  emailIsForbidden: true;
}

function forbiddenNameValidator(
  control: FormControl
): {
  [key: string]: boolean;
} | null {
  const forbiddenUserNames: string[] = ['Carlos', 'Felipe'];

  if (forbiddenUserNames.indexOf(<string> control.value) !== -1) {
    return {
      nameIsForbidden: true
    };
  }

  return null;
}

// tslint:disable no-unsafe-any no-any
function forbiddenEmailsValidator(
  control: FormControl
): Promise<any> | Observable<any> {
  return new Promise<any>(
    (resolve: any): void => {
      setTimeout(
        () => {
          if (control.value === 'test@test.com') {
            resolve({
              emailIsForbidden: true
            });
          } else {
            resolve(null);
          }
        },
        1000
      );
    }
  );
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public genders: string[] = ['male', 'female'];
  public signUpForm: FormGroup;
  public hobbiesFormArray: FormArray;
  private _forbiddenUserNames: string[] = ['Carlos', 'Felipe'];

  public ngOnInit(): void {
    this.hobbiesFormArray = new FormArray([]);
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, forbiddenNameValidator]),
        email: new FormControl('', [Validators.required, Validators.email], [forbiddenEmailsValidator])
      }),
      gender: new FormControl('female', Validators.required),
      hobbies: this.hobbiesFormArray
    });
  }

  public onSubmit(): void {
    console.log(this.signUpForm);
    console.log(this.signUpForm.get('hobbies'));
  }

  public onAddHobby(): void {
    const control: FormControlTyped<string> = new FormControl(null, Validators.required);

    this.hobbiesFormArray.push(control);
  }
}
