import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      role: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      currentCompany: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      industry: ['', Validators.required],
      linkedIn: ['', Validators.required]
    })
  }

}
