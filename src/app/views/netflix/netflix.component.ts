import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Genre } from 'src/app/types/genre';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.component.html',
  styleUrls: ['./netflix.component.scss']
})
export class NetflixComponent implements OnInit {

  private movies: Movie[] = []
  public genres: Genre[] = []

  constructor(
    private _movies: MoviesService,
  ) { }

  ngOnInit(): void {
    this.getMovies()
  }

  get featured(): Movie {
    return this.movies[0];
  }

  moviePoster(movie: Movie): string {
    return this._movies.poster(movie)
  }

  private getMovies() {
    this._movies.getPopularMovies()
      .then(movies => {
        this.genres.unshift({
          id: 0,
          name: 'Popular',
          movies: movies,
        })
        this.movies = movies
      })

    this._movies.getGenres()
      .then(async genres => {
        // Let's take the first X genres and add them to the genre list
        const genresToShow = genres.slice(0, 5)

        for (const genre of genresToShow) {
          const movies = await this._movies.getMoviesByGenre(genre.id)
          genre.movies = movies
          this.genres.push(genre)
        }
      })
  }

}
