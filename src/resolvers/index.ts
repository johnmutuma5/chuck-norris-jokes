import HealthcheckResolver from "./healthCheckResolver";
import JokeResolver from './jokeResolver';
import ChuckNorrisJokesProvider from "../providers/chuckNorrisJokesProvider";
import JokeResponse from "src/common/types/jokeResponse";
import {RandomJokeInput} from "src/common/types/randomJokeInpt";
import CategoriesResponse from "src/common/types/categoriesResponse";

const jokeResolver = new JokeResolver(new ChuckNorrisJokesProvider);
const healthcheckResolver = new HealthcheckResolver();


export default {
  Query: {
    random_joke: (_: any, args: RandomJokeInput): Promise<JokeResponse> => (
      jokeResolver.getRandomJoke(args.category)
    ),
    categories: (): Promise<CategoriesResponse> => (jokeResolver.getJokeCategories()),
    health_check: (): string => healthcheckResolver.healthCheck()
  }
};
