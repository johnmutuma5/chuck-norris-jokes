import JokesProvider from "src/common/interfaces/jokesProvider";
import {JokeCategoriesResponse, JokeResponse} from "src/common/types/responses";

export default class JokeResolver {
  constructor(private jokesProvider: JokesProvider) { }


  public getRandomJoke = (categoryName: string): Promise<JokeResponse> => {
    console.assert(this.jokesProvider);
    return this.jokesProvider.shuffleCategory(categoryName);
  }

  public getJokeCategories = (): Promise<JokeCategoriesResponse> => {
    return this.jokesProvider.getJokeCategories();
  }
}
