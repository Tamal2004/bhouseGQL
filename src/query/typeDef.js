import { gql } from 'apollo-server';

const typeDef = gql`
    type Query {
        _empty: String
    }
    
    type PageInfo {
        lastCursor: ID
        hasNextPage: Boolean
        firstCursor: ID
        hasPreviousPage: Boolean
    }
`;

export { typeDef as default, typeDef as Query };
