import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listPrintPositions(first: Int, after: Int): PrintPositionConnection
        getPrintPosition(id: Int!): PrintPosition
    }

    type PrintPosition {
        id: Int!
        position: String
    }

    type PrintPositionConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [PrintPositionEdge]
    }

    type PrintPositionEdge {
        cursor: Int
        node: PrintPosition
    }
`;

export { typeDef as default, typeDef as PrintPosition };
