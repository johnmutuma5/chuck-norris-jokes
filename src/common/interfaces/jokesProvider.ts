import JokeResponse from "../types/jokeResponse";

export default interface JokesProvider {
  shuffleCategory: (categoryName: string) => Promise<JokeResponse>;
}
