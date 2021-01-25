import nock from 'nock';
import {ApolloServer, gql } from "apollo-server-express";
import resolvers from '../src/resolvers';
import typeDefs from '../src/typeDefs';
import { createTestClient } from 'apollo-server-testing';
import {JokeCategoriesResponse} from '../src/common/types/responses';

const GET_CATEGORIES = gql`
  query {
    categories {
      status
      value
    }
  }
`;

describe('Joke Categories', () => {
  it('should return an array of strings', async () => {
    const server = new ApolloServer({ typeDefs, resolvers });

    const statusCode = 200;
    const mockCategories = ['career', 'fashion'];

    nock('https://api.chucknorris.io')
      .get('/jokes/categories')
      .reply(statusCode, mockCategories);

    const { query } = createTestClient(server);
    const resp = await query({ query: GET_CATEGORIES });
    const categoriesWrapper = <JokeCategoriesResponse>resp.data.categories;

    expect(categoriesWrapper.status).toBe(200);
    expect(categoriesWrapper.value).toHaveSize(mockCategories.length);
    expect(categoriesWrapper.value).toEqual(mockCategories);
  });
})
