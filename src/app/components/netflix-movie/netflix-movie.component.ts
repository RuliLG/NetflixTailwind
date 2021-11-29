import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-netflix-movie',
  templateUrl: './netflix-movie.component.html',
  styleUrls: ['./netflix-movie.component.scss']
})
export class NetflixMovieComponent implements OnInit {

  @Input() movie!: Movie

  constructor(
    private _movies: MoviesService,
  ) { }

  ngOnInit(): void {
  }

  get posterUrl(): string {
    return this._movies.poster(this.movie)
  }

}
