import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listRequestTypes(first: Int, after: Int): RequestTypeConnection
        getRequestType(id: Int!): RequestType
    }

    type RequestType {
        id: Int!
        type: String
    }

    type RequestTypeConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [RequestTypeEdge]
    }

    type RequestTypeEdge {
        cursor: Int
        node: RequestType
    }
`;

export { typeDef as default, typeDef as RequestType };
