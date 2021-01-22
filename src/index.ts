import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app, cors: true });

app.listen({ port: 4000 }, () => {
  console.log(`Server listenning on https://localhost:4000${server.graphqlPath}`)
});
