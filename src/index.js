import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import { merge } from 'lodash';

// Databases
import SQLDatabase from './db';

// Domains
import { Buyer, buyerResolvers } from './buyer';
import { Department, departmentResolvers } from './department';
import { SampleFactory, sampleFactoryResolvers } from './sampleFactory';
import { Country, countryResolvers } from './country';
import { Query, queryResolvers } from './query';

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
const resolvers = merge(
    queryResolvers,
    buyerResolvers,
    departmentResolvers,
    sampleFactoryResolvers,
    countryResolvers
);

const schema = makeExecutableSchema({
    typeDefs: [Query, Buyer, Department, SampleFactory, Country],
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
