import JokesProvider from "src/common/interfaces/jokesProvider";
import Joke from "src/common/types/joke";
import OurResponse from "src/common/types/response";

export default class JokeResolver {

  constructor(private jokesProvider: JokesProvider) { }

  public getRandomJoke = (categoryName: string): Promise<OurResponse<Joke>> => {
    console.assert(this.jokesProvider);
    return this.jokesProvider.shuffleCategory(categoryName);
  }

  public getJokeCategories = () => {
    return this.jokesProvider.getJokeCategories();
  }
}
