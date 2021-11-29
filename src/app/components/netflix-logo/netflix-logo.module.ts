import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetflixLogoComponent } from './netflix-logo.component';



@NgModule({
  declarations: [
    NetflixLogoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NetflixLogoComponent,
  ]
})
export class NetflixLogoModule { }
