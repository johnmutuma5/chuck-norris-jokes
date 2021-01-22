import Joke from "./joke";

export default interface JokeResponse {
  status: number;
  value: Joke | null;
}

