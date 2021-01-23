import CategoriesResponse from "../types/categoriesResponse";
import JokeResponse from "../types/jokeResponse";

export default interface JokesProvider {
  shuffleCategory: (categoryName: string) => Promise<JokeResponse>;
  getJokeCategories: () => Promise<CategoriesResponse>;
}
