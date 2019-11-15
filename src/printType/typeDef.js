import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listPrintTypes(first: Int, after: Int): PrintTypeConnection
        getPrintType(id: Int!): PrintType
    }

    type PrintType {
        id: Int!
        type: String
    }

    type PrintTypeConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [PrintTypeEdge]
    }

    type PrintTypeEdge {
        cursor: Int
        node: PrintType
    }
`;

export { typeDef as default, typeDef as PrintType };
