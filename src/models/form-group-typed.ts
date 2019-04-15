// import { Observable } from 'rxjs';

// import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormGroup, ValidatorFn } from '@angular/forms';

// export class FormGroupTyped<T> extends FormGroup {
//   public readonly value: T;
//   public readonly valueChanges: Observable<T>;

//   constructor(
//     controls: { [key in keyof T]: AbstractControl },
//     validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
//     asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
//   ) {
//     super(controls, validatorOrOpts, asyncValidator);
//   }

//   // tslint:disable-next-line: no-unnecessary-override
//   public patchValue(
//     value: Partial<T> | T, options?: {
//       onlySelf?: boolean;
//       emitEvent?: boolean;
//     }): void {
//     super.patchValue(value, options);
//   }

// // tslint:disable-next-line: no-unnecessary-override no-reserved-keywords
//   public get(
//     path: (Extract<keyof T, string>)[] | Extract<keyof T, string>
//   ): AbstractControl | never {
//     return super.get(path);
//   }
// }
