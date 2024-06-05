import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [LandingPageComponent, SignUpComponent, SignInComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
    
  ],
  exports: [
    LandingPageComponent, SignUpComponent, SignInComponent, HeaderComponent, FooterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class CoreModule { }
