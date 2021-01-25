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

const PORT = process.env.PORT || 4000;
app.listen({ port: PORT }, () => {
  console.log(`Server listenning on https://localhost:${PORT}{server.graphqlPath}`)
});
