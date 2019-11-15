import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listUkSizes(first: Int, after: Int): UkSizeConnection
        getUkSize(id: Int!): UkSize
    }

    type UkSize {
        id: Int!
        size: String
    }

    type UkSizeConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [UkSizeEdge]
    }

    type UkSizeEdge {
        cursor: Int
        node: UkSize
    }
`;

export { typeDef as default, typeDef as UkSize };
