import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listCadStatus(first: Int, after: Int): CadStatusConnection
        getCadStatus(id: Int!): CadStatus
    }

    type CadStatus {
        id: Int!
        cadStatus: String
    }

    type CadStatusConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [CadStatusEdge]
    }

    type CadStatusEdge {
        cursor: Int
        node: CadStatus
    }
`;

export { typeDef as default, typeDef as CadStatus };
