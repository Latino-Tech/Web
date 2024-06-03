import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LandingPageComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class CoreModule { }
