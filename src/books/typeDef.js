import { gql } from 'apollo-server';

const typeDef = gql`
    type Book {
        id: Int!
        title: String
        author: String
    }
`;

export { typeDef as default, typeDef as Book };
