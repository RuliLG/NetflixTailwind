import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NetflixLogoModule } from 'src/app/components/netflix-logo/netflix-logo.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
      LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    NetflixLogoModule,
  ]
})
export class LoginModule { }
