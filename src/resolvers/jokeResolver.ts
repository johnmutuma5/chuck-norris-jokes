import JokesProvider from "src/common/interfaces/jokesProvider";

export default class JokeResolver {

  constructor(private jokesProvider: JokesProvider) { }

  getRandomJoke = async () => {
    console.assert(this.jokesProvider);
    return await this.jokesProvider.throwRandomJoke();
  }
}
