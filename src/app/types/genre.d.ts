import { Movie } from "./movie";

interface Genre {
  id: number,
  name: string,
  movies?: Movie[],
}
