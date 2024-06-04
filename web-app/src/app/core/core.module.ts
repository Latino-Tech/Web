import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [LandingPageComponent, SignUpComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LandingPageComponent, SignUpComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class CoreModule { }
