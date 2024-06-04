import { MatStepperModule } from '@angular/material/stepper';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    MatButtonModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
  export class MaterialModule { }
