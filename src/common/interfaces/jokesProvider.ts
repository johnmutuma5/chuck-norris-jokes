import {JokeCategoriesResponse, JokeResponse} from "../types/responses";

export default interface JokesProvider {
  shuffleCategory: (categoryName: string) => Promise<JokeResponse>;
  getJokeCategories: () => Promise<JokeCategoriesResponse>;
}
