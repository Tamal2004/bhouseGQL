import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listNecklines(first: Int, after: Int): NecklineConnection
        getNeckline(id: Int!): Neckline
    }

    type Neckline {
        id: Int!
        neckline: String
    }

    type NecklineConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [NecklineEdge]
    }

    type NecklineEdge {
        cursor: Int
        node: Neckline
    }
`;

export { typeDef as default, typeDef as Neckline };
