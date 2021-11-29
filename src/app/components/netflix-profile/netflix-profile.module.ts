import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetflixProfileComponent } from './netflix-profile.component';



@NgModule({
  declarations: [
    NetflixProfileComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NetflixProfileComponent,
  ]
})
export class NetflixProfileModule { }
