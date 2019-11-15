import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listFabricCompositions(first: Int, after: Int): FabricCompositionConnection
        getFabricComposition(id: Int!): FabricComposition
    }

    type FabricComposition {
        id: Int!
        composition: String
    }

    type FabricCompositionConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [FabricCompositionEdge]
    }

    type FabricCompositionEdge {
        cursor: Int
        node: FabricComposition
    }
`;

export { typeDef as default, typeDef as FabricComposition };
