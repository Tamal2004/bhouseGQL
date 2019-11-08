import { gql } from 'apollo-server';

econst typeDef = gql`
    type Book {
        id: Int!
        title: String
        author: String
    }
    type Query {
        books: [Book]
        book(id: Int!): Book
    }
`;

// export { typeDef as default, typeDef };

module.exports = typeDef;