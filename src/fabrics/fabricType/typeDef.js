import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listFabricTypes(first: Int, after: Int): FabricTypeConnection
        getFabricType(id: Int!): FabricType
    }

    type FabricType {
        id: Int!
        fabricType: String
    }

    type FabricTypeConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [FabricTypeEdge]
    }

    type FabricTypeEdge {
        cursor: Int
        node: FabricType
    }
`;

export { typeDef as default, typeDef as FabricType };
