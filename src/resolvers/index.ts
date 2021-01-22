import HealthcheckResolver from "./healthCheckResolver";
import JokeResolver from './jokeResolver';
import ChuckNorrisJokesProvider from "../providers/chuckNorrisJokesProvider";

const concreteJokeResolver = new JokeResolver(new ChuckNorrisJokesProvider);
const concreteHealthcheckResolver = new HealthcheckResolver();


export default {
  Query: {
    random_joke: () => {
      return concreteJokeResolver.getRandomJoke();
    },
    health_check: () => {
      return concreteHealthcheckResolver.healthCheck();
    }
  }
};
