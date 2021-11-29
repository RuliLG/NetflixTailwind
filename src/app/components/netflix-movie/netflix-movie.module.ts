import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetflixMovieComponent } from './netflix-movie.component';



@NgModule({
  declarations: [
    NetflixMovieComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NetflixMovieComponent,
  ],
})
export class NetflixMovieModule { }
