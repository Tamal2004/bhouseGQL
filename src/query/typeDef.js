import { gql } from 'apollo-server';

const typeDef = gql`
    type Query {
        _empty: String
    }
`;

export { typeDef as default, typeDef as Query };
