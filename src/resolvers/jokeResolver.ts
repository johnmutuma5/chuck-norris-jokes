import JokesProvider from "src/common/interfaces/jokesProvider";
import {JokeResponse} from "src/common/types/responses";

export default class JokeResolver {

  constructor(private jokesProvider: JokesProvider) { }

  public getRandomJoke = (categoryName: string): Promise<JokeResponse> => {
    console.assert(this.jokesProvider);
    return this.jokesProvider.shuffleCategory(categoryName);
  }

  public getJokeCategories = () => {
    return this.jokesProvider.getJokeCategories();
  }
}
