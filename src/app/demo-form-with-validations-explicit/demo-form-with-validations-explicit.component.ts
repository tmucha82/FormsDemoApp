import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from "@angular/forms";

/**
 * Our custom validator
 *
 * A validator:
 * - Takes a `Control` as it's input and
 * - Returns a `StringMap<string, boolean>` where the key is "error code" and
 *   the value is `true` if it fails
 */
function skuValidator(control: FormControl): {[s: string]: boolean} {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}

@Component({
  selector: 'demo-form-with-validations-explicit',
  templateUrl: './demo-form-with-validations-explicit.component.html',
  styleUrls: ['./demo-form-with-validations-explicit.component.css']
})
export class DemoFormWithValidationsExplicitComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;

  constructor(formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'sku': ['', Validators.compose([Validators.required, skuValidator])]
    });

    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe((value: string) => {
      console.log('sku changed to:', value)
    });
    this.myForm.valueChanges.subscribe((form:any) => {
      console.log('Form change to', form);
    });
  }

  onSubmit(value: string): void {
    console.log('you submitted value', value);
  }

  ngOnInit() {
  }
}
