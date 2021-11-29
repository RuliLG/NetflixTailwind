import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../types/genre';
import { Movie } from '../types/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey: string = '14a67df2c5e0c7928d56090a0ed510ce'

  constructor(
    private _http: HttpClient,
  ) { }

  getPopularMovies(): Promise<Movie[]> {
    return this._http.get('https://api.themoviedb.org/3/trending/movie/week', {
      params: {
        api_key: this.apiKey,
        language: 'es-ES',
      }
    })
      .toPromise()
      .then((response: any) => {
        return response.results as Movie[]
      })
  }

  getMoviesByGenre(genreId: Genre['id']): Promise<Movie[]> {
    console.log({
      api_key: this.apiKey,
      language: 'es-ES',
      sort_by: 'popularity.desc',
      include_adult: false,
      include_video: true,
      with_genres: genreId,
    })
    return this._http.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: this.apiKey,
        language: 'es-ES',
        sort_by: 'popularity.desc',
        include_adult: false,
        include_video: true,
        with_genres: genreId,
      }
    })
      .toPromise()
      .then((response: any) => {
        return response.results as Movie[]
      })
  }

  getGenres(): Promise<Genre[]> {
    return this._http.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: {
        api_key: this.apiKey,
        language: 'es-ES',
      }
    })
      .toPromise()
      .then((response: any) => {
        return response.genres as Genre[]
      })
  }

  poster(movie: Movie): string {
    return `https://image.tmdb.org/t/p/w780${movie.poster_path}`
  }
}
