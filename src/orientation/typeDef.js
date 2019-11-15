import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listOrientations(first: Int, after: Int): OrientationConnection
        getOrientation(id: Int!): Orientation
    }

    type Orientation {
        id: Int!
        orientation: String
    }

    type OrientationConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [OrientationEdge]
    }

    type OrientationEdge {
        cursor: Int
        node: Orientation
    }
`;

export { typeDef as default, typeDef as Orientation };
