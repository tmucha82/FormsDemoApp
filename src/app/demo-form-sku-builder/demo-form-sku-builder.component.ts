import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'demo-form-sku-builder',
  templateUrl: './demo-form-sku-builder.component.html',
  styleUrls: ['./demo-form-sku-builder.component.css']
})
export class DemoFormSkuBuilderComponent implements OnInit {
  myForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({'sku': ['ABC123']});

  }

  onSubmit(value: string) : void {
    console.log('you submitted value', value);
  }

  ngOnInit() {
  }

}
