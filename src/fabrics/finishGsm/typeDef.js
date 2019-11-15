import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listGsm(first: Int, after: Int): GsmConnection
        getGsm(id: Int!): Gsm
    }

    type Gsm {
        id: Int!
        gsm: String
    }

    type GsmConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [GsmEdge]
    }

    type GsmEdge {
        cursor: Int
        node: Gsm
    }
`;

export { typeDef as default, typeDef as Gsm };
