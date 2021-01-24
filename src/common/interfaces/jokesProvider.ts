import Joke from "../types/joke";
import OurResponse from "../types/response";

export default interface JokesProvider {
  shuffleCategory: (categoryName: string) => Promise<OurResponse<Joke>>;
  getJokeCategories: () => Promise<OurResponse<string[]>>;
}
