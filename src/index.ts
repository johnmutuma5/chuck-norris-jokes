import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import typeDefs from './typeDefs';
import resolvers from './resolvers';
import ChuckNorrisJokesProvider from './providers/chuckNorrisJokesProvider';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    jokesProvider: new ChuckNorrisJokesProvider()
  }),
  introspection: true
});


server.applyMiddleware({ app, cors: true });

const PORT = process.env.PORT || 4000;
app.listen({ port: PORT }, () => {
  console.log(`Server listenning on localhost:${PORT}${server.graphqlPath}`)
});
