import HealthcheckResolver from "./healthCheckResolver";
import JokeResolver from './jokeResolver';
import ChuckNorrisJokesProvider from "../providers/chuckNorrisJokesProvider";
import JokeResponse from "src/common/types/jokeResponse";
import {RandomJokeInput} from "src/common/types/randomJokeInpt";

const jokeResolver = new JokeResolver(new ChuckNorrisJokesProvider);
const healthcheckResolver = new HealthcheckResolver();


export default {
  Query: {
    random_joke: function randomJokes(_: any, args: RandomJokeInput): Promise<JokeResponse>{
       return jokeResolver.getRandomJoke(args.category)
    },
    health_check: (): string => healthcheckResolver.healthCheck()
  }
};
