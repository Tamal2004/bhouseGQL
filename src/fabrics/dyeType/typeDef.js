import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listDyeTypes(first: Int, after: Int): DyeTypeConnection
        getDyeType(id: Int!): DyeType
    }

    type DyeType {
        id: Int!
        dyeType: String
    }

    type DyeTypeConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [DyeTypeEdge]
    }

    type DyeTypeEdge {
        cursor: Int
        node: DyeType
    }
`;

export { typeDef as default, typeDef as DyeType };
