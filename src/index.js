import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import { merge } from 'lodash';

// Domains
import { Book, bookResolvers } from './books';
import { Query, queryResolvers } from './queries';

// Root resolver
const resolvers = merge(queryResolvers, bookResolvers);

const schema = makeExecutableSchema({
    typeDefs: [Query, Book],
    resolvers
});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    schema,
    playground: true,
    introspection: true
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
