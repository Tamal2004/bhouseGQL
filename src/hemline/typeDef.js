import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listHemlines(first: Int, after: Int): HemlineConnection
        getHemline(id: Int!): Hemline
    }

    type Hemline {
        id: Int!
        hemline: String
    }

    type HemlineConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [HemlineEdge]
    }

    type HemlineEdge {
        cursor: Int
        node: Hemline
    }
`;

export { typeDef as default, typeDef as Hemline };
