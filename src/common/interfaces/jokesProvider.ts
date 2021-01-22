import Joke from "../types/joke";

export default interface JokesProvider {
  throwRandomJoke: () => Promise<Joke>;
}
