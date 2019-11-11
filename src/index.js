import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import { merge } from 'lodash';

// Databases
import SQLDatabase from './db';

// Domains
import { Book, bookResolvers } from './books';
import { Query, queryResolvers } from './queries';

const knexConfig = {
    client: 'mssql',
    connection: {
        user: 'SA',
        password: 'echo@tex@1',
        server: '185.38.37.19',
        database: 'EchoUK'
    }
};

const db = new SQLDatabase(knexConfig);

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
    introspection: true,
    dataSources: () => ({ db })
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
