import HealthcheckResolver from "./healthCheckResolver";
import JokeResolver from './jokeResolver';
import ChuckNorrisJokesProvider from "../providers/chuckNorrisJokesProvider";
import {RandomJokeInput} from "src/common/types/randomJokeInpt";
import {JokeCategoriesResponse, JokeResponse} from "src/common/types/responses";

const jokeResolver = new JokeResolver(new ChuckNorrisJokesProvider);
const healthcheckResolver = new HealthcheckResolver();


export default {
  Query: {
    random_joke: (_: any, args: RandomJokeInput): Promise<JokeResponse> => jokeResolver.getRandomJoke(args.category),
    categories: (): Promise<JokeCategoriesResponse> => jokeResolver.getJokeCategories(),
    health_check: (): string => healthcheckResolver.healthCheck()
  }
};
