import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSelectionComponent } from './profile-selection.component';
import { ProfileSelectionRoutingModule } from './profile-selection-routing.module';
import { NetflixProfileModule } from 'src/app/components/netflix-profile/netflix-profile.module';
import { NetflixLogoModule } from 'src/app/components/netflix-logo/netflix-logo.module';



@NgModule({
  declarations: [
      ProfileSelectionComponent,
  ],
  imports: [
    CommonModule,
    ProfileSelectionRoutingModule,
    NetflixProfileModule,
    NetflixLogoModule,
  ]
})
export class ProfileSelectionModule { }
