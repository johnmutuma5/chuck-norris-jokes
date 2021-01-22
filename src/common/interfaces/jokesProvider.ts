import JokeResponse from "../types/jokeResponse";

export default interface JokesProvider {
  throwRandomJoke: () => Promise<JokeResponse>;
}
