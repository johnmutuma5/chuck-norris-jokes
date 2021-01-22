import JokeResponse from "../types/jokeResponse";

export default interface JokesProvider {
  shuffleCategory: () => Promise<JokeResponse>;
}
