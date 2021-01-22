import JokesProvider from "src/common/interfaces/jokesProvider";
import JokeResponse from "src/common/types/jokeResponse";

export default class JokeResolver {

  constructor(private jokesProvider: JokesProvider) { }

  public getRandomJoke = async (): Promise<JokeResponse> => {
    console.assert(this.jokesProvider);
    return await this.jokesProvider.throwRandomJoke();
  }
}
