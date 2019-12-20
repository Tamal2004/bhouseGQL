import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listDesignerLocations(first: Int, after: Int): DesignerLocationConnection
        getDesignerLocation(id: Int!): DesignerLocation
    }

    type DesignerLocation {
        id: Int!
        location: String
    }

    type DesignerLocationConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [DesignerLocationEdge]
    }

    type DesignerLocationEdge {
        cursor: Int
        node: DesignerLocation
    }
`;

export { typeDef as default, typeDef as DesignerLocation };
