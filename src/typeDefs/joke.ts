import {gql} from "apollo-server-express";

export default gql`
  extend type Query {
    random_joke: Joke
  }

  type Joke {
    value: String
  }
`;

