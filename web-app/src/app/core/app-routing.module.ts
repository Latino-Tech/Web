import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', title: "Latino tech - Home", pathMatch: 'full' },
  { path: 'home', title: "Latino tech - Home", component: LandingPageComponent },
  { path: 'signup', title: "Sign up", component: SignUpComponent },
  { path: 'signin', title: "Sign in", component: SignInComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
