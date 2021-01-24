import HealthcheckResolver from "./healthCheckResolver";
import JokeResolver from './jokeResolver';
import ChuckNorrisJokesProvider from "../providers/chuckNorrisJokesProvider";
import {RandomJokeInput} from "src/common/types/randomJokeInpt";
import OurResponse from "src/common/types/response";
import Joke from "src/common/types/joke";

const jokeResolver = new JokeResolver(new ChuckNorrisJokesProvider);
const healthcheckResolver = new HealthcheckResolver();


export default {
  Query: {
    random_joke: (_: any, args: RandomJokeInput): Promise<OurResponse<Joke>> => (
      jokeResolver.getRandomJoke(args.category)
    ),
    categories: (): Promise<OurResponse<string[]>> => (jokeResolver.getJokeCategories()),
    health_check: (): string => healthcheckResolver.healthCheck()
  }
};
