import HealthcheckResolver from "./healthCheckResolver";
import JokeResolver from './jokeResolver';
import ChuckNorrisJokesProvider from "../providers/chuckNorrisJokesProvider";

const concreteHealthcheckResolver = new HealthcheckResolver();
const concreteJokeResolver = new JokeResolver(new ChuckNorrisJokesProvider);


export default {
  Query: {
    health_check: () => {
      return concreteHealthcheckResolver.healthCheck();
    },
    random_joke: () => {
      return concreteJokeResolver.getRandomJoke();
    }
  }
};
