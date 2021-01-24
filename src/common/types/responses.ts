import Joke from "./joke";
import JokeCategories from "./jokeCategories";

export default interface OurResponseOf<T> {
  status: number;
  value: T
}

export interface JokeCategoriesResponse extends OurResponseOf<JokeCategories> {}
export interface JokeResponse extends OurResponseOf<Joke> {}
