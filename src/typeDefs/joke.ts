import {gql} from "apollo-server-express";

export default gql`
  extend type Query {
    random_joke(category: String!): JokeResponse
    categories: CategoriesResponse
  }

  type JokeResponse {
    status: Int
    value: Joke 
  }

  type CategoriesResponse {
    status : Int
    value:  [String!]
  }

  type Joke {
    id: String
    text: String
    joke_url: String
    icon_url: String
  }
`;

