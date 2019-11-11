import { gql } from 'apollo-server';

const typeDef = gql`
    type Query {
        books: [Book]
        book(id: Int!): Book
    }
`;

export { typeDef as default, typeDef as Query };
