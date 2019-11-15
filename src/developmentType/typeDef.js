import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listDevelopmentTypes(first: Int, after: Int): DevelopmentTypeConnection
        getDevelopmentType(id: Int!): DevelopmentType
    }

    type DevelopmentType {
        id: Int!
        type: String
        module:String
    }

    type DevelopmentTypeConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [DevelopmentTypeEdge]
    }

    type DevelopmentTypeEdge {
        cursor: Int
        node: DevelopmentType
    }
`;

export { typeDef as default, typeDef as DevelopmentType };
