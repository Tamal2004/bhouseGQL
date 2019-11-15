import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listFabricFor(first: Int, after: Int): FabricForConnection
        getFabricFor(id: Int!): FabricFor
    }

    type FabricFor {
        id: Int!
        fabricFor: String
    }

    type FabricForConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [FabricForEdge]
    }

    type FabricForEdge {
        cursor: Int
        node: FabricFor
    }
`;

export { typeDef as default, typeDef as FabricFor };
