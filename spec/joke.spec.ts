import nock from "nock";
import {ApolloServer, gql} from "apollo-server-express";

import resolvers from '../src/resolvers';
import typeDefs from '../src/typeDefs';
import {createTestClient} from "apollo-server-testing";
import {JokeResponse} from "../src/common/types/responses";
import ChuckNorrisJokesProvider from "../src/providers/chuckNorrisJokesProvider";

const GET_RANDOM_JOKE = gql`
  query Joke($category: String!) {
    random_joke(category: $category) {
      status
      value {
        id
        text
        joke_url
        icon_url
      }
    }
  }
`;

describe('Jokes', () => {
  it('should resolve random jokes', async () => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources: () => ({
        jokesProvider: new ChuckNorrisJokesProvider()
      })
    });

    const statusCode = 200;
    const mockJoke = {
      id: '01randomjoke',
      value: 'Chuck Norris first job was a paperboy. There we no survivors',
      url: 'https://test.com',
      icon_url: 'htts://test.com/image.png'
    };

    nock('https://api.chucknorris.io')
      .get('/jokes/random')
      .query(true)
      .reply(statusCode, mockJoke);

    const { query } = createTestClient(server);
    const resp = await query({
      query: GET_RANDOM_JOKE,
      variables: { category: 'career' }
    });
    const jokeWrapper = <JokeResponse>resp.data.random_joke;
    expect(jokeWrapper.status).toBe(statusCode);
    expect(jokeWrapper.value.id).toBe(mockJoke.id);
    expect(jokeWrapper.value.text).toBe(mockJoke.value);
    expect(jokeWrapper.value.joke_url).toBe(mockJoke.url);
    expect(jokeWrapper.value.icon_url).toBe(mockJoke.icon_url);
  });
});
