import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetflixRoutingModule } from './netflix-routing.module';
import { NetflixComponent } from './netflix.component';
import { NetflixLogoModule } from 'src/app/components/netflix-logo/netflix-logo.module';
import { NetflixMovieModule } from 'src/app/components/netflix-movie/netflix-movie.module';



@NgModule({
  declarations: [
      NetflixComponent,
  ],
  imports: [
    CommonModule,
    NetflixRoutingModule,
    NetflixLogoModule,
    NetflixMovieModule,
  ]
})
export class NetflixModule { }
