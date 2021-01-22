import {gql} from "apollo-server-express";

export default gql`
  extend type Query {
    random_joke: JokeResponse
  }

  type JokeResponse {
    status: String
    value: Joke
  }

  type Joke {
    id: String
    text: String
    joke_url: String
    icon_url: String
  }
`;

