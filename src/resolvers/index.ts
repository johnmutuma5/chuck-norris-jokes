import HealthcheckResolver from "./healthCheckResolver";
import JokeResolver from './jokeResolver';
import ChuckNorrisJokesProvider from "../providers/chuckNorrisJokesProvider";
import JokeResponse from "src/common/types/jokeResponse";

const concreteJokeResolver = new JokeResolver(new ChuckNorrisJokesProvider);
const concreteHealthcheckResolver = new HealthcheckResolver();


export default {
  Query: {
    random_joke: (): Promise<JokeResponse> => concreteJokeResolver.getRandomJoke(),
    health_check: (): string => concreteHealthcheckResolver.healthCheck()
  }
};
