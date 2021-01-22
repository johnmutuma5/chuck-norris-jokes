import JokesProvider from "src/common/interfaces/jokesProvider";
import JokeResponse from "src/common/types/jokeResponse";

export default class JokeResolver {

  constructor(private jokesProvider: JokesProvider) { }

  public getRandomJoke = (): Promise<JokeResponse> => {
    console.assert(this.jokesProvider);
    return this.jokesProvider.shuffleCategory();
  }
}
