import {gql} from 'apollo-server-express';
import joke from './joke'

const root = gql`
  type Query {
    health_check: String
  }
`;

export default [
  root,
  joke
];
