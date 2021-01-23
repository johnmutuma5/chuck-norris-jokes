import {gql} from "apollo-server-express";

export default gql`
  extend type Query {
    random_joke(category: String): JokeResponse
    categories: CategoriesResponse
  }

  type JokeResponse {
    status: Number
    value: Joke
  }

  type CategoriesResponse {
    status : Number
    value:  [String!]
  }

  type Joke {
    id: String
    text: String
    joke_url: String
    icon_url: String
  }
`;

